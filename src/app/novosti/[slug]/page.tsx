import { getSingleNovostiQuery } from '@/app/queries/getSingleNovosti';
import { lazy, Suspense } from 'react';

import AppFooter from '@/app/components/AppFooter';
import AppHeader from '@/app/components/AppHeader';
import { UserLanguage } from '@/app/types/appState';

const PageContent = lazy(() => import('./PageContent'));

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
        <PageContent content={prepareDataForClient()} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
