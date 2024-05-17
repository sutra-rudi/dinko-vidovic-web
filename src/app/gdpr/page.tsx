import { getDinkoGDPR } from '../queries/getDinkoGDPR';

export default async function GdprConsent({}) {
  const getDinkoGDPRQuery = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoGDPR,
    }),
    cache: 'no-store',
  });

  const parseData = await getDinkoGDPRQuery.json();

  return <main></main>;
}
