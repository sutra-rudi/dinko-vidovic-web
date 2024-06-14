import { getSingleNovostiQuery } from '@/app/queries/getSingleNovosti';
import { Suspense } from 'react';
import PageContent from './PageContent';
import AppFooter from '@/app/components/AppFooter';
import AppHeader from '@/app/components/AppHeader';
import { UserLanguage } from '@/app/types/appState';

export default async function NovostiPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { lang: string };
}) {
  const parami = params.slug.split('-').at(-1);

  const isHr = searchParams.lang === UserLanguage.hr;

  const getSingleNovost = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getSingleNovostiQuery(parami!),
    }),
    cache: 'no-store',
  });

  const parseData = await getSingleNovost.json();

  const prepareDataForClient = () => {
    if (parseData) {
      const dataShorthand = parseData.data.novosti.novostiFields;

      if (isHr) {
        return {
          newsDate: dataShorthand.datumNovosti,
          newsTitle: dataShorthand.hrvatskiJezik.naslov,
          pageContent: dataShorthand.hrvatskiJezik.sadrzaj,
          seoText: dataShorthand.seo,
          heroImage: dataShorthand.slikaHero.node,
        };
      } else
        return {
          newsDate: dataShorthand.datumNovosti,
          newsTitle: dataShorthand.engleskiJezik.naslov,
          pageContent: dataShorthand.engleskiJezik.sadrzaj,
          seoText: dataShorthand.seo,
          heroImage: dataShorthand.slikaHero.node,
        };
    }
  };

  return (
    <Suspense>
      <AppHeader />
      <main className='min-h-screen bg-white'>
        <PageContent
          content={prepareDataForClient()}
          // content={
          //   searchParams.lang === UserLanguage.en
          //     ? parseData.data.news.novosti.engleskiJezik.novostiTekstEng
          //     : parseData.data.news.novosti.hrvatskiJezik.novostiTekstHr
          // }
          // date={parseData.data.news.novosti.datumBlog}
          // heroImg={parseData.data.news.novosti.slikaHeroBlog}
          // title={
          //   searchParams.lang === UserLanguage.en
          //     ? parseData.data.news.novosti.engleskiJezik.naslovNovostiEng
          //     : parseData.data.news.novosti.hrvatskiJezik.nASLOVNOVOSTIHR
          // }
        />
      </main>
      <AppFooter />
    </Suspense>
  );
}
