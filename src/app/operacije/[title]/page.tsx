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
    const currentSurgeryCategory = surgeryCategories.filter((cat) => {
      return (
        cat.opTitleHr.trim().toLowerCase() === clientOpCategoryReq.trim().toLowerCase() ||
        cat.opTitleEn.trim().toLowerCase() === clientOpCategoryReq.trim().toLowerCase()
      );
    });

    return currentSurgeryCategory;
  };

  const dataShorthand = pageContent.data.allOperacije.edges;

  const prepareDataForClient = dataShorthand.filter((item: any) => {
    const shortHandCat = item.node.operacijeTekstoviPodstranica.odaberiKategoriju[0].trim().toLowerCase();

    const res = shortHandCat === findSurgeriesByCategory()[0]?.opTitleHr.split('-').join(' ').toLowerCase();
    return res;
  });

  const preparePageTitle = prepareDataForClient[0].node.operacijeTekstoviPodstranica.odaberiKategoriju[0] ?? '';
  const prepareHeroUrl = prepareDataForClient[0].node.operacijeTekstoviPodstranica.naslovnaSlikaHeroImage ?? '';
  console.log('PREP', prepareHeroUrl);
  return (
    <Suspense>
      <AppHeader />
      <main>
        <PageContent
          content={prepareDataForClient}
          pageTitle={preparePageTitle}
          heroImage={prepareHeroUrl ? prepareHeroUrl.node : ''}
        />
      </main>
      <AppFooter />
    </Suspense>
  );
}
