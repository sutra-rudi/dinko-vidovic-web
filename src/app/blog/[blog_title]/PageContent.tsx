import React from 'react';
import blogHero from '../../img/heros/dinko-vidovic-blog-hero-placeholder.png';
import blogArticleImg from '../../img/blog/dinko-vidovic-blog-article-placeholder.png';
import blogSvg from '../../img/svg/dinko-vidovic-blog-bg-svg.svg';
import Image from 'next/image';
import { Roboto_Condensed } from 'next/font/google';

const RobotoFont = Roboto_Condensed({ subsets: ['latin'], weight: '700' });
const PageContent = () => {
  return (
    <article className='relative overflow-x-hidden'>
      <Image src={blogHero} alt='image of blog' />
      <div className='relative w-full h-full'>
        <Image
          src={blogSvg}
          alt='svg deco'
          className='absolute top-[5%] -left-[10%] z-0 pointer-events-none select-none'
        />
        <Image
          src={blogSvg}
          alt='svg deco'
          className='absolute top-[42%] -right-[5%] z-0 pointer-events-none select-none'
        />

        <Image
          src={blogSvg}
          alt='svg deco'
          className='absolute -bottom-[0] -left-[5%] z-0 pointer-events-none select-none'
        />
        <div className='max-w-max-container mx-auto my-0 text-dinko-tamnoplava grid grid-cols-1 items-center gap-8 lg:mt-32 md:mt-24 mt-16 lg:w-2/4 w-full lg:px-0 px-4 z-10'>
          <h2 className='lg:text-4xl md:text-3xl text-2xl'>SAČUVATI ILI ZAMIJENITI ZGLOB?</h2>
          <h4 className={`lg:text-xl md:text-lg text-base font-bold leading-baseLineHeight ${RobotoFont.className}`}>
            Pacijenti često traže pomoć zbog bolnog koljena, što otežava svakodnevne aktivnosti. Liječenje varira ovisno
            o stupnju bolesti. Minimalno invazivni zahvati su opcije za manja oštećenja, dok se za ozbiljnije slučajeve
            preporučuje totalna endoproteza. Razvoj tehnologije omogućuje brz oporavak, nudeći pacijentima izbor
            očuvanja ili zamjene zgloba.
          </h4>
          <p className='text-base leading-blogParaLineHeight'>
            {`U svakodnevnom mi se radu često javljaju pacijenti koji traže pomoć radi bolnog koljena koje im značajno
          narušava kvalitetu života. Aktivnosti poput vožnje bicikla, plesa, putovanja i druženja s obitelji, a vrlo
          često i obična šetnja za njih postaju „nemoguća misija“.\n\nPacijente pritom najviše zanima koje su opcije
          liječenja - sačuvati ili zamijeniti zglob? Valja reći da na ovo pitanje nema jednoznačnog odgovora. Naime,
          izbor između liječenja potpunom zamjenom zgloba (totalna endoproteza) ili reparacijskim/rekonstruktivnim
          zahvatom, ovisi isključivo o stupnju bolesti. Primjerice, ako godinama bolujete od osteoartritisa koljena s
          posljedičnim potpunim gubitkom hrskavičnog pokrova te deformitetom i defektima kosti, totalna endoproteza
          koljena je najbolje rješenje koje će ispraviti deformitet ekstremiteta te omogućiti normalnu i bezbolnu
          funkciju koljena. S druge pak strane, ako su oštećenja manjeg opsega, odnosno ako postoji dio zgloba koji ima
          očuvanu strukturu i djelomičnu funkciju, rješenje je u očuvanju zgloba reparacijsko - rekonstruktivnim
          zahvatom.`}
          </p>
          <figure>
            <Image src={blogHero} alt='image of blog' />
            <figcaption className='italic lg:text-sm text-xs leading-[143%]'>
              S lijeva na desno: korektivna osteotomija, parcijalna endoproteza koljena, totalna endoproteza koljena
            </figcaption>
          </figure>

          <h3 className='font-medium lg:text-3xl md:text-2xl text-xl leading-baseLineHeight'>
            Minimalno invazivni reparacijski i rekonstruktivni zahvati
          </h3>

          <p className='leading-blogParaLineHeight'>
            Ovom skupinom zahvata sprječavamo preopterećenje zdrave ili manjih područja oštećene hrskavice. Izvode se
            minimalno invazivno, artroskopski na dva mala portala na prednjoj strani koljena. Ovi zahvati uključuju sve
            zahvate na meniscima, kao što su parcijalna meniscektomija, šavi meniska i transplantacija meniska  kao i
            rekonstrukciju križnih ligamenata. Također izvodimo i reparacijske postupke na oštećenoj hrskavici, kao što
            su bušenje zglobnih tijela koje kombiniramo s metodama koje podupiru cijeljenje hrskavičnog tkiva (stromalna
            vaskularna frakcija iz masnog tkiva i faktori rasta trombocita).
          </p>

          <h3 className='font-medium lg:text-3xl md:text-2xl text-xl leading-baseLineHeight'>
            Korektivna osteotomija i parcijalna endoproteza koljena
          </h3>

          <p className='leading-blogParaLineHeight'>
            U nekih pacijenata oštećen je samo jedan kompartment koljena, dok je preostali dio zgloba nezahvaćen
            osteoartritisom ili su pak promjene minimalne. Uzrok tome je često patološka osovina, valgus ili varus
            koljena, odnosno, kako bismo to kolokvijalno rekli -  iks ili oks noge.  U tom slučaju mogće je kauzalno
            liječenje zahvatom korektivne osteotomije kojom se rastereti oštećeni dio zgloba korekcijom osovine
            ekstremiteta ili pak ugradnjom parcijalne endoproteze koljena. I jedna i druga metoda imaju izvrsne
            rezultate u svom indikacijskom području jer prezerviraju ligamente i ostale strukture nezahvaćenog zgloba te
            pacijenta u potpunosti oslobađaju boli. 
          </p>

          <h3 className='font-medium lg:text-3xl md:text-2xl text-xl leading-baseLineHeight'>
            Totalna endoproteza koljena
          </h3>

          <p className='leading-blogParaLineHeight'>
            Ovdje dolazimo do zahvata kojega se pacijenti pribojavaju zbog nedostatka informacija. Termin umjetni zglob
            koljena koji se uvriježio među pacijentima zvuči puno ekstenzivnije nego što to zapravo jest.  Ovim zahvatom
            se ne uklanja cijeli zglob, nego, dapače, samo mali dio kosti s bolesnom hrskavicom, a ugradnjom
            endoproteze, zglobne se površine zapravo presvuku implantatom, slično kao što stomatolog ukloni bolesni dio
            zuba i presvuče ga navlakom od umjetnog materijala. Valja napomenuti da se ovim zahvatom ispravlja i
            patološka osovina te deformiteti koljena. Opet zbog nedostatka informacija, neki pacijenti misle da će nakon
            ugradnje totalne endoproteze koljena biti slabije pokretni, a zapravo je upravo suprotno.
          </p>

          <p className='leading-blogParaLineHeight'>
            Uspješnost ove metode nevjerojatno je velika i omogućuje potpuno bezbolan i funkcionalan zglob dulje od dva
            desetljeća nakon ugradnje. Stoga mnogi pacijenti s kojim razgovaram žale što se nisu i prije odlučili na
            ovaj zahvat. Na polju endoprotetike koljena svjedočimo velikom napretku, kako u operacijskoj tehnici, tako i
            u dizajnu implantata. Naime u Specijalnoj bolnici Sv. Katarina ugrađujemo najnoviju generaciju totalne
            endoproteze koljena (Physica KR) koja je dizajnirana tako da potpuno oponaša prirodnu anatomiju zglobnih
            površina zdravog koljena. Tako pruža izvrstan funkcionalni ishod pa omogućuje brz oporavak i povratak svim
            aktivnostima, uključujući i neke sportske aktivnosti pa je zato posebno atraktivna opcija za mlađe pacijente
            ili za one nešto starije s većim funkcionalnim zahtjevima.
          </p>

          <figure className='z-10'>
            <Image src={blogArticleImg} alt='image of blog' />
            <figcaption className='italic lg:text-sm text-xs leading-[143%]'>
              Lijevo: deformitet prije ugradnje endoproteze; desno: ispravljen deformitet ugradnjom endoproteze
            </figcaption>
          </figure>

          <p className='leading-blogParaLineHeight'>
            Ukratko, na pitanje sačuvati ili zamijeniti zglob, odgovor glasi:  i jedno i drugo! Naime, svaka faza
            osteoartritisa ima svoje rješenje u spektru operacijskih metoda, a pojedine metode se također uspješno
            kombiniraju.
          </p>
        </div>
      </div>
    </article>
  );
};

export default PageContent;
