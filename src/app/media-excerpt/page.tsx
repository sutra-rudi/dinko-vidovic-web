import { lazy, Suspense } from 'react';
import { getDinkoMediaExcerpt } from '../queries/getDinkoMediaExcerpt';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

const PageContent = lazy(() => import('./PageContent'));

export default async function IzdvojenoIzMedija({}) {
  const getDinkoMediaExcerptQuery = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoMediaExcerpt,
    }),
  });

  const parseData = await getDinkoMediaExcerptQuery.json();

  return (
    <Suspense>
      <AppHeader />
      <main>
        <PageContent content={parseData} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
