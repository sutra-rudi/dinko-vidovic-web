import AppHeader from './components/AppHeader';
import { Suspense } from 'react';
import LandingHero from './sections/LandingHero';
import Operacije from './sections/Operacije';
import Novosti from './sections/Novosti';
import Biografija from './sections/Biografija';
import VideoCitat from './sections/VideoCitat';
import IskustvaPacijenata from './sections/IskustvaPacijenata';
import PromoSekcija from './sections/PromoSekcija';
import BlogSekcija from './sections/BlogSekcija';
import BannerSekcija from './sections/BannerSekcija';
import AppFooter from './components/AppFooter';
export default async function Home() {
  return (
    <Suspense>
      <AppHeader />
      <main className='min-h-screen bg-white'>
        <LandingHero />
        <Operacije />
        <Novosti />
        <Biografija />
        <VideoCitat />
        <IskustvaPacijenata />
        <PromoSekcija />
        <BlogSekcija />
        <BannerSekcija />
      </main>
      <AppFooter />
    </Suspense>
  );
}
