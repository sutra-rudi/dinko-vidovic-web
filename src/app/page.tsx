import AppHeader from './components/AppHeader';
import { Suspense } from 'react';
import LandingHero from './sections/LandingHero';
import Operacije from './sections/Operacije';
import Novosti from './sections/Novosti';
import Biografija from './sections/Biografija';
import VideoCitat from './sections/VideoCitat';
import IskustvaPacijenata from './sections/IskustvaPacijenata';
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
      </main>
    </Suspense>
  );
}
