import { getDinkoPravilaQuery } from '../queries/getDInkoPravila';

export default async function PrivacyPolicy({}) {
  const getDinkoPravila = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoPravilaQuery,
    }),
    cache: 'no-store',
  });

  const parseData = await getDinkoPravila.json();

  return <main></main>;
}
