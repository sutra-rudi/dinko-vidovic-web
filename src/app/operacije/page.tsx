import { Suspense } from 'react';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Operacije from '../sections/Operacije';
export default async function OperacijeMain() {
  return (
    <Suspense>
      <AppHeader />
      <main>
        <Operacije />
      </main>
      <AppFooter />
    </Suspense>
  );
}
