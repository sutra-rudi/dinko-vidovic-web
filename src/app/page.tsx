import AppHeader from './components/AppHeader';
import { Suspense } from 'react';
import LandingHero from './sections/LandingHero';
import Operacije from './sections/Operacije';
import Novosti from './sections/Novosti';
export default async function Home() {
  return (
    <Suspense>
      <AppHeader />
      <main className='min-h-screen bg-white'>
        <LandingHero />
        <Operacije />
        <Novosti />
      </main>
    </Suspense>
  );
}
