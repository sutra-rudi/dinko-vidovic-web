import AppFooter from '@/app/components/AppFooter';
import AppHeader from '@/app/components/AppHeader';
import { getDinkoOperacijeQuery } from '@/app/queries/getDinkoOperacije';
import parse from 'html-react-parser';
import { Suspense } from 'react';
import PageContent from './PageContent';
import { UserLanguage } from '@/app/types/appState';

export default async function Operacije({
  searchParams,
  params,
}: {
  searchParams: { lang: string };
  params: { title: string };
}) {
  const getDinkoOperacije = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoOperacijeQuery,
    }),
    cache: 'no-store',
  });

  const pageContent = await getDinkoOperacije.json();

  const surgeryCategories = [
    { opTitleHr: 'KOLJENO', opTitleEn: 'KNEE' },
    { opTitleHr: 'LIJEČENJE-PRIJELOMA', opTitleEn: 'FRACTURE-TREATMENT' },
    { opTitleHr: 'KUK', opTitleEn: 'HIP' },
    { opTitleHr: 'RAME', opTitleEn: 'SHOULDER' },
    { opTitleHr: 'TETIVE', opTitleEn: 'TENDONS' },
    { opTitleHr: 'GLEŽANJ', opTitleEn: 'ANKLE' },
    { opTitleHr: 'ORTOBIOLOGIJA', opTitleEn: 'ORTHOBIOLOGY' },
  ];

  const clientOpCategoryReq = params.title;

  const findSurgeriesByCategory = () => {
    const currentCat =
      searchParams.lang === UserLanguage.hr
        ? surgeryCategories.find(
            (surgeryCategory) => surgeryCategory.opTitleHr.trim().toLowerCase() === clientOpCategoryReq
          )
        : surgeryCategories.find(
            (surgeryCategory) => surgeryCategory.opTitleEn.trim().toLowerCase() === clientOpCategoryReq
          );
    return currentCat;
  };

  const dataShorthand = pageContent.data.allOperacije.edges;

  const prepareDataForClient = dataShorthand.filter((item: any) => {
    const shortHandCat = item.node.operacijeTekstoviPodstranica.odaberiKategoriju[0].trim().toLowerCase();

    const res = shortHandCat === findSurgeriesByCategory()?.opTitleHr.split('-').join(' ').toLowerCase();
    console.log('RES', res);
    return res;
  });

  return (
    <Suspense>
      <AppHeader />
      <main>
        <PageContent content={prepareDataForClient} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
