'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';

const clientW = typeof window !== 'undefined' && window ? window.innerWidth : 1024;

const CookiesConsent = () => (
  <CookieConsent
    buttonText={'Razumijem'}
    style={{ background: '#17AEC2', maxWidth: clientW > 768 ? '768px' : '100%', placeItems: 'flex-end' }}
    buttonStyle={{ background: '#F5FAFF', borderRadius: '6px' }}
  >
    <h2 className='xl:text-2xl text-lg pb-2'>Pozdrav!</h2>

    <p className='xl:text-base text-sm text-balance leading-baseLineHeight '>
      Ova stranica koristi kolačiće kako bi osigurala bolje korisničko iskustvo. Korištenjem ove stranice pristajete na
      upotrebu kolačića u skladu s našim Pravilima o kolačićima. Hvala vam na posjeti!
    </p>
  </CookieConsent>
);

export default CookiesConsent;
