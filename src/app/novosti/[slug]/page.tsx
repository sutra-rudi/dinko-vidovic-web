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
  const novosti_id = params.slug.split('-').at(-1);

  const getSingleNovost = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getSingleNovostiQuery(novosti_id!),
    }),
    cache: 'no-store',
  });

  const parseData = await getSingleNovost.json();

  return (
    <Suspense>
      <AppHeader />
      <main className='min-h-screen bg-white'>
        <PageContent
          content={
            searchParams.lang === UserLanguage.en
              ? parseData.data.news.novosti.engleskiJezik.novostiTekstEng
              : parseData.data.news.novosti.hrvatskiJezik.novostiTekstHr
          }
          date={parseData.data.news.novosti.datumBlog}
          heroImg={parseData.data.news.novosti.slikaHeroBlog}
          title={
            searchParams.lang === UserLanguage.en
              ? parseData.data.news.novosti.engleskiJezik.naslovNovostiEng
              : parseData.data.news.novosti.hrvatskiJezik.nASLOVNOVOSTIHR
          }
        />
      </main>
      <AppFooter />
    </Suspense>
  );
}
