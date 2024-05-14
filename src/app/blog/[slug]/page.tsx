import AppFooter from '@/app/components/AppFooter';
import AppHeader from '@/app/components/AppHeader';
import { Suspense } from 'react';

import BlogSekcija from '@/app/sections/BlogSekcija';
import { getAllBlogsQuery } from '@/app/queries/getDinkoBlogs';
import { getSingleBlogQuery } from '@/app/queries/getSingleBlog';
import PageContent from './PageContent';

export default async function BlogPage({ params }: { params: { slug: string } }) {
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

  const blog_id = params.slug.split('-').at(-1);

  const getSingleBlog = await fetch(`${process.env.DINKO_GRAPHQL_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getSingleBlogQuery(blog_id!),
    }),
    cache: 'no-store',
  });

  const parsePost = await getSingleBlog.json();

  return (
    <Suspense>
      <AppHeader />
      <main className='min-h-screen bg-white'>
        <PageContent content={parsePost} />
        <BlogSekcija blogList={parseData} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
