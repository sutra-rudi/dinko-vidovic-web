import AppHeader from './components/AppHeader';
import { lazy, Suspense } from 'react';

import { getAllBlogsQuery } from './queries/getDinkoBlogs';
import { getDinkoNovostiQuery } from './queries/getDinkoNovosti';
import { getDinkoIskustvaQuery } from './queries/getDinkoIskustva';
import dynamic from 'next/dynamic';
import Loading from './loading';
import { getDinkoBiographyQuery } from './queries/getDinkoBiography';
import { getDinkoStatsQuery } from './queries/getDinkoStats';

export const maxDuration = 60;
export const revalidate = 3600; // revalidate at most every hour

const LandingHero = lazy(() => import('./sections/LandingHero'));
const Operacije = lazy(() => import('./sections/Operacije'));
const Novosti = lazy(() => import('./sections/Novosti'));
const Biografija = lazy(() => import('./sections/Biografija'));
const VideoCitat = lazy(() => import('./sections/VideoCitat'));
const PromoSekcija = lazy(() => import('./sections/PromoSekcija'));
const BlogSekcija = lazy(() => import('./sections/BlogSekcija'));
const BannerSekcija = lazy(() => import('./sections/BannerSekcija'));
const AppFooter = lazy(() => import('./components/AppFooter'));

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

  const LazyIskustva = dynamic(() => import('./sections/IskustvaPacijenata'), {
    ssr: false,
    loading: () => <Loading />,
  });

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
        <Suspense>
          <LazyIskustva iskustvaList={parseIskustvaData} />
        </Suspense>
        <Suspense>
          <PromoSekcija content={parseStatsData} />
        </Suspense>
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
