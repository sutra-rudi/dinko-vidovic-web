import { lazy, Suspense } from 'react';
import { getDinkoFaqQuery } from '../queries/getDinkoFaq';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

import { UserLanguage } from '../types/appState';

export const revalidate = 3600;

const PageContent = lazy(() => import('./PageContent'));

export default async function Faq({ searchParams }: { searchParams: { lang: string } }) {
  const getDinkoFaq = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoFaqQuery,
    }),
  });

  const parseData = await getDinkoFaq.json();

  const shorthand = parseData.data.allFaq.edges[0].node.faqFields;

  const triageData = searchParams.lang === UserLanguage.hr ? shorthand.faqHr : shorthand.faqEn;

  const heroImage = shorthand.heroImage.node;

  return (
    <Suspense>
      <AppHeader />
      <main>
        <PageContent content={triageData} heroImg={heroImage} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
