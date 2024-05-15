'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';

const clientW = window.innerWidth;

const CookiesConsent = () => (
  <CookieConsent
    debug
    buttonText={'Razumjem'}
    style={{ background: '#17AEC2', maxWidth: clientW > 768 ? '768px' : '100%', placeItems: 'flex-end' }}
    buttonStyle={{ background: '#F5FAFF', borderRadius: '6px' }}
  >
    <h2 className='xl:text-2xl text-lg'>Pozdrav!</h2>

    <p className='xl:text-base text-sm text-balance'>
      Ova stranica koristi kolačiće kako bi osigurala bolje korisničko iskustvo. Korištenjem ove stranice pristajete na
      upotrebu kolačića u skladu s našom Pravilima o kolačićima. Hvala vam na posjeti!
    </p>
  </CookieConsent>
);

export default CookiesConsent;
