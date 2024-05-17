import { getDinkoUvjetiQuery } from '../queries/getDinkoUvjeti';

export default async function TermsOfUse({}) {
  const getDinkoUvjeti = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoUvjetiQuery,
    }),
    cache: 'no-store',
  });

  const parseData = await getDinkoUvjeti.json();

  return <main></main>;
}
