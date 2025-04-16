export const maxDuration = 60;
export const revalidate = 3600; // revalidate at most every hour

import { Suspense } from 'react';

import { getAllBlogsQuery } from './queries/getDinkoBlogs';
import { getDinkoNovostiQuery } from './queries/getDinkoNovosti';
import { getDinkoIskustvaQuery } from './queries/getDinkoIskustva';
import { getDinkoBiographyQuery } from './queries/getDinkoBiography';
import { getDinkoStatsQuery } from './queries/getDinkoStats';
import dynamic from 'next/dynamic';
import Loading from './loading';

const AppHeader = dynamic(() => import('./components/AppHeader'), { loading: () => <Loading /> });
const LandingHero = dynamic(() => import('./sections/LandingHero'), { loading: () => <Loading /> });
const Operacije = dynamic(() => import('./sections/Operacije'), { loading: () => <Loading /> });
const Novosti = dynamic(() => import('./sections/Novosti'), { loading: () => <Loading /> });
const Biografija = dynamic(() => import('./sections/Biografija'), { loading: () => <Loading /> });
const VideoCitat = dynamic(() => import('./sections/VideoCitat'), { loading: () => <Loading /> });
const PromoSekcija = dynamic(() => import('./sections/PromoSekcija'), { loading: () => <Loading /> });
const BlogSekcija = dynamic(() => import('./sections/BlogSekcija'), { loading: () => <Loading /> });
const BannerSekcija = dynamic(() => import('./sections/BannerSekcija'), { loading: () => <Loading /> });
const AppFooter = dynamic(() => import('./components/AppFooter'), { loading: () => <Loading /> });
const IskustvaPacijenata = dynamic(() => import('./sections/IskustvaPacijenata'), {
  loading: () => <Loading />,
  ssr: false,
});

export default async function Home() {
  const getDinkoBlogs = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllBlogsQuery,
    }),
  });

  const parseData = await getDinkoBlogs.json();

  const getDinkoNovosti = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoNovostiQuery,
    }),
  });

  const parseNovostiData = await getDinkoNovosti.json();

  const getDinkoIskustva = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoIskustvaQuery,
    }),
  });

  const parseIskustvaData = await getDinkoIskustva.json();

  const getDinkoBiography = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoBiographyQuery,
    }),
  });

  const parseBiographyData = await getDinkoBiography.json();

  const getDinkoStats = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getDinkoStatsQuery,
    }),
  });

  const parseStatsData = await getDinkoStats.json();

  return (
    <Suspense>
      <AppHeader />
      <main className='min-h-dvh bg-white'>
        <Suspense>
          <LandingHero />
        </Suspense>
        <Suspense>
          <Operacije />
        </Suspense>
        <Suspense>
          <Novosti novostiList={parseNovostiData} />
        </Suspense>
        <Suspense>
          <Biografija content={parseBiographyData} />
        </Suspense>
        <Suspense>
          <VideoCitat />
        </Suspense>
        <Suspense>{parseIskustvaData.data && <IskustvaPacijenata iskustvaList={parseIskustvaData} />}</Suspense>
        <Suspense>{parseStatsData.data && <PromoSekcija content={parseStatsData} />}</Suspense>
        <Suspense>
          <BlogSekcija blogList={parseData} isBlogPage />
        </Suspense>
        <Suspense>
          <BannerSekcija />
        </Suspense>
      </main>
      <AppFooter />
    </Suspense>
  );
}
