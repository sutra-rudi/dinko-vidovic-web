import { Suspense } from 'react';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import PageContent from './PageContent';
import { getAllBlogsQuery } from '../queries/getDinkoBlogs';
import { UserLanguage } from '../types/appState';

export default async function BlogArchive({ searchParams }: { searchParams: { lang: string } }) {
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

  const blogShorthand = parseData.data.allVidovicBlog.edges;

  const prepareDataForClient = () => {
    if (searchParams.lang === UserLanguage.hr) {
      return blogShorthand.map((blog: any) => {
        return {
          ...blog.node.dinkoBlog.hrvatskiJezik,
          imageData: blog.node.dinkoBlog.slikaThumbBlog.node,
          blogId: blog.node.vidovicBlogId,
        };
      });
    } else
      return blogShorthand.map((blog: any) => {
        return {
          ...blog.node.dinkoBlog.engleskiJezik,
          imageData: blog.node.dinkoBlog.slikaThumbBlog.node,
          blogId: blog.node.vidovicBlogId,
        };
      });
  };

  return (
    <Suspense>
      <AppHeader />
      <main className='min-h-screen'>
        <PageContent blogList={prepareDataForClient()} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
