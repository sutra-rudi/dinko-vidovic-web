import AppFooter from '@/app/components/AppFooter';
import AppHeader from '@/app/components/AppHeader';
import { operacijeByKat } from '@/app/staticWebData/operacijeDemo';
import { Suspense } from 'react';

export default async function Operacije() {
  return (
    <Suspense>
      <AppHeader />
      <main>
        <div className='grid grid-cols-1 gap-24'>
          {operacijeByKat.map((operacija) => {
            return (
              <div key={operacija.titleHr}>
                <h2 className='text-dinko-tamnoplava xl:text-xl lg:text-lg text-base leading-baseLineHeight font-bold uppercase'>
                  {operacija.titleHr}
                </h2>
                <div className='grid gap-24 grid-cols-1'>
                  {operacija.contentHr.map((operacijaContent) => (
                    <p
                      key={operacijaContent}
                      id={operacijaContent.toLowerCase().split(' ').join('-')}
                      className={`text-dinko-tamnoplava xl:text-lg text-base xl:leading-blogParaLineHeight leading-none font-normal block scroll-smooth`}
                    >
                      {operacijaContent}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <AppFooter />
    </Suspense>
  );
}
