import AppHeader from './components/AppHeader';
import { Suspense } from 'react';
import LandingHero from './sections/LandingHero';
import Operacije from './sections/Operacije';
import Novosti from './sections/Novosti';
import Biografija from './sections/Biografija';
import VideoCitat from './sections/VideoCitat';
import PromoSekcija from './sections/PromoSekcija';
import BlogSekcija from './sections/BlogSekcija';
import BannerSekcija from './sections/BannerSekcija';
import AppFooter from './components/AppFooter';
import { getAllBlogsQuery } from './queries/getDinkoBlogs';
import { getDinkoNovostiQuery } from './queries/getDinkoNovosti';
import { getDinkoIskustvaQuery } from './queries/getDinkoIskustva';
import dynamic from 'next/dynamic';
import Loading from './loading';

export default async function Home() {
  const getDinkoBlogs = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllBlogsQuery,
    }),
    cache: 'no-store',
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
    cache: 'no-store',
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
    cache: 'no-store',
  });

  const parseIskustvaData = await getDinkoIskustva.json();

  const LazyIskustva = dynamic(() => import('./sections/IskustvaPacijenata'), {
    ssr: false,
    loading: () => <Loading />,
  });

  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className='min-h-screen bg-white'>
        <LandingHero />
        <Operacije />
        <Novosti novostiList={parseNovostiData} />
        <Biografija />
        <VideoCitat />
        <LazyIskustva iskustvaList={parseIskustvaData} />
        <PromoSekcija />
        <BlogSekcija blogList={parseData} isBlogPage />
        <BannerSekcija />
      </main>
      <AppFooter />
    </Suspense>
  );
}
