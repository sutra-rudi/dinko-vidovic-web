import AppFooter from '@/app/components/AppFooter';
import AppHeader from '@/app/components/AppHeader';
import { Suspense } from 'react';
import PageContent from './PageContent';
import BlogSekcija from '@/app/sections/BlogSekcija';

export default async function BlogPage() {
  return (
    <Suspense>
      <AppHeader />
      <main className='min-h-screen bg-white'>
        <PageContent />
        <BlogSekcija />
      </main>
      <AppFooter />
    </Suspense>
  );
}
