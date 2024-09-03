import { lazy, Suspense } from 'react';
import { getDinkoPravilaQuery } from '../queries/getDInkoPravila';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import { UserLanguage } from '../types/appState';

const PageContent = lazy(() => import('./PageContent'));

export default async function PrivacyPolicy({ searchParams }: { searchParams: { lang: string } }) {
  const getDinkoPravila = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoPravilaQuery,
    }),
  });

  const parseData = await getDinkoPravila.json();

  const shorthand = parseData.data.allPravilaPrivatnosti.edges[0].node.pravilaPrivatnostiFields;

  const prepareDataForClient = () =>
    searchParams.lang === UserLanguage.hr ? shorthand.pravilaPrivatnostiHrvatski : shorthand.pravilaPrivatnostiEngleski;

  return (
    <Suspense>
      <AppHeader />
      <main>
        <PageContent content={prepareDataForClient()} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
