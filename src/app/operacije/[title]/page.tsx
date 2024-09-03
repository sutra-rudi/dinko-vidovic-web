import AppFooter from '@/app/components/AppFooter';
import AppHeader from '@/app/components/AppHeader';
import { getDinkoOperacijeQuery } from '@/app/queries/getDinkoOperacije';
import { lazy, Suspense } from 'react';

import { UserLanguage } from '@/app/types/appState';
import slugify from 'slugify';
import Operacije from '@/app/sections/Operacije';

const PageContent = lazy(() => import('./PageContent'));

export default async function OperacijePage({
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
    cache: 'no-cache',
  });

  const pageContent = await getDinkoOperacije.json();

  const slugifyOptions = {
    strict: true,
    replacement: '-',
    trim: true,
    locale: 'en',
    lower: true,
  };

  const clientOpReq = params.title;

  const dataShorthand = pageContent.data.allOperacije.edges;

  const prepareDataForClient = dataShorthand.filter((item: any) => {
    const itemShorthand = item.node.operacijeTekstoviPodstranica.naslovHr;
    const itemShorthandEn = item.node.operacijeTekstoviPodstranica.naslovEng;

    return (
      slugify(itemShorthand, slugifyOptions) === clientOpReq || slugify(itemShorthandEn, slugifyOptions) === clientOpReq
    );
  });

  const preparePageTitle = () => prepareDataForClient[0].node.operacijeTekstoviPodstranica.odaberiKategoriju;
  const prepareHeroUrl = () => prepareDataForClient[0].node.operacijeTekstoviPodstranica.naslovnaSlikaHeroImage;

  return (
    <Suspense>
      <AppHeader />
      <main>
        <PageContent content={prepareDataForClient} pageTitle={preparePageTitle()} heroImage={prepareHeroUrl()} />
        <Operacije />
      </main>
      <AppFooter />
    </Suspense>
  );
}
