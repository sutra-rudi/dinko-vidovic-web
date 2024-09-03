import { Suspense } from 'react';
import { getDinkoUvjetiQuery } from '../queries/getDinkoUvjeti';
import { UserLanguage } from '../types/appState';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export default async function TermsOfUse({ searchParams }: { searchParams: { lang: string } }) {
  const getDinkoUvjeti = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoUvjetiQuery,
    }),
  });

  const parseData = await getDinkoUvjeti.json();

  const dataShorthand = parseData.data.allUvjetiKoristenja.edges[0].node.uvjetiKoristenjaFields;

  const isHr = searchParams.lang === UserLanguage.hr;

  return (
    <Suspense>
      <AppHeader />
      <main>
        {JSON.stringify(isHr ? dataShorthand.uvjetiKoristenjaHrvatski : dataShorthand.uvjetiKoristenjaEngleski)}
      </main>
      <AppFooter />
    </Suspense>
  );
}
