import AppFooter from '@/app/components/AppFooter';
import AppHeader from '@/app/components/AppHeader';
import { Suspense } from 'react';
import PageContent from './PageContent';
import BlogSekcija from '@/app/sections/BlogSekcija';

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const getPosts = await fetch(`${process.env.DINKO_BASE_URL}`, { cache: 'no-store' });
  const parseData = await getPosts.json();

  const getSinglePost = await fetch(`${process.env.DINKO_SINGLE_POST_URL}${params.slug}`, { cache: 'no-store' });

  const parseSinglePost = await getSinglePost.json();

  return (
    <Suspense>
      <AppHeader />
      <main className='min-h-screen bg-white'>
        <PageContent content={parseSinglePost} />
        <BlogSekcija blogList={parseData} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
