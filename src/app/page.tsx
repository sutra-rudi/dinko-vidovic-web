import Image from 'next/image';
import AppHeader from './components/AppHeader';
import { Suspense } from 'react';
export default async function Home() {
  return (
    <Suspense>
      <AppHeader />
      <main className='min-h-screen bg-white'></main>
    </Suspense>
  );
}
