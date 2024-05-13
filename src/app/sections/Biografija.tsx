'use client';

import Image from 'next/image';
import React from 'react';
import DinkoBioHero from '../img/heros/dinko-vidovic-biografija-slika.png';
import DinkoBioMobile from '../img/heros/dinko-vidovic-biografija-slika-mobile.png';
import StickyBox from 'react-sticky-box';
import AppButton from '../components/AppButton';
const Biografija = () => {
  return (
    <section className='relative 2xl:mt-28 xl:mt-24 lg:mt-20 mt-16 pb-28'>
      <div className='flex lg:items-start items-center lg:justify-start justify-center max-w-max-container my-0 mx-auto lg:gap-24 md:gap-20 gap-16 lg:flex-nowrap flex-wrap 2xl:p-0 px-6 '>
        <StickyBox
          offsetTop={0}
          offsetBottom={0}
          className='max-lg:!relative w-full h-full  lg:min-h-[700px] md:min-h-[600px] min-h-[500px] lg:max-w-[795px] '
        >
          <div className='lg:block hidden'>
            <Image
              className='object-cover lg:object-bottom object-center md:aspect-[9 / 16] aspect-square'
              alt='Image of Dinko Vidovic smiling'
              src={DinkoBioHero}
              fill
            />
          </div>
          <div className='lg:hidden block'>
            <Image
              className='object-cover lg:object-bottom object-center md:aspect-[9 / 16] aspect-square'
              alt='Image of Dinko Vidovic smiling'
              src={DinkoBioMobile}
              fill
            />
          </div>
        </StickyBox>

        <div className='grid grid-cols-1 items-start gap-6 lg:max-w-[686px] w-full lg:pt-16 pr-6'>
          <h1 className='text-dinko-tamnoplava 2xl:text-heroText xl:text-5xl lg:text-4xl text-subHeading leading-baseLineHeight'>
            Biografija
          </h1>

          <p className='text-dinko-tamnoplava lg:text-base text-sm break-words whitespace-pre-wrap text-balance leading-normal'>
            <span className='font-medium'>Izv. prof. dr. sc. Dinko Vidović</span> specijalist je ortopedije i
            traumatologije. Njegova je specijalnost kirurgija kuka, koljena i ramena, a ima bogato iskustvo u pružanju
            iznimne skrbi svojim pacijentima. Predstojnik je Klinike i voditelj Odjela za sportsku traumatologiju
            Klinike za traumatologiju KBC-a Sestre milosrdnice u Zagrebu. Od 2020. godine član je i stručnog tima
            Klinike za ortopediju Specijalne bolnice Sv. Katarina u Zagrebu. Izvanredni je profesor na Katedrama za
            kirurgiju Medicinskog fakulteta i Stomatološkog fakulteta Sveučilišta u Zagrebu.
          </p>
          <p className='text-dinko-tamnoplava lg:text-base text-sm break-words whitespace-pre-wrap text-balance leading-normal'>
            Profesor Vidović je tijekom godina stekao bogato međunarodno iskustvo - za vrijeme stručnog usavršavanja
            boravio je u centrima izvrsnosti kao što su Sveučilišne bolnice u Strasbourgu, Beču i Regensburgu. Tijekom
            svoga rada kontinuirano se bavi kliničkim istraživanjima i često objavljuje znanstvene radove. Kao pozvani
            predavač redovito sudjeluje na raznim međunarodnim tečajevima ortopedije i traumatologije, kongresima i
            simpozijima - posebice na AO Recon tečajevima, gdje je regionalni i međunarodni predavač tepredsjedavajući u
            Hrvatskoj na tečaju Primarna i kompleksna totalna endoproteza kuka i koljena.
          </p>
          <p className='text-dinko-tamnoplava lg:text-base text-sm break-words whitespace-pre-wrap text-balance leading-normal'>
            Predsjednik je Hrvatskog traumatološkog društva i član međunarodnih stručnih društava:
            <span className='font-medium'> AO Foundation</span> - neprofitna organizacija posvećena unaprjeđenju skrbi
            za pacijente s mišićno-koštanim ozljedama i njihovim posljedicama kroz istraživanje, razvoj i edukaciju
            kirurga i operativnog osoblja, <span className='font-medium'>ESSKA</span> - Europsko društvo za sportsku
            traumatologiju, kirurgiju koljena i artroskopiju te <span className='font-medium'>EFORT</span> - Europska
            federacija nacionalnih udruga ortopedije i traumatologije.
          </p>

          <p className='text-dinko-tamnoplava lg:text-base text-sm break-words whitespace-pre-wrap text-balance leading-normal'>
            Profesor Vidović godišnje obavi oko 300 operacijskih zahvata, uglavnom totalnih endoproteza koljena i kuka,
            kako primarnih, tako i najkompleksnijihrevizijskih zahvata. Također izvodi sve vrste artroskopskih zahvata
            na koljenu, uključujući i rekonstrukcije svih ligamenata. U svakodnevnom radu bavi se i liječenjem prijeloma
            dugih kostiju te ugradnjom endoproteza ramena. Primjenjuje i ortobiološku terapiju i transplantaciju
            hrskavice.
          </p>

          <div className='self-start'>
            <AppButton primary='bio' content='Izdvojeno iz medija' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biografija;
