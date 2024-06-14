'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';

const clientW = typeof window !== 'undefined' && window ? window.innerWidth : 1024;

const CookiesConsent = () => (
  <CookieConsent
    // debug
    buttonText={'Razumijem'}
    style={{
      background: '#17AEC2',
      maxWidth: clientW > 768 ? '590px' : '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(1,1fr)',
      gap: '0',
      placeItems: 'start',
      padding: '0.25rem',
    }}
    buttonStyle={{
      background: '#17AEC2',
      borderRadius: '6px',
      color: '#F5FAFF',
      borderColor: '#F5FAFF',
      borderWidth: '1px',
      borderStyle: 'solid',
      marginTop: '0',
      padding: '0.5rem 1rem',
    }}
  >
    <p className='xl:text-base text-sm text-balance leading-baseLineHeight '>
      Ova stranica koristi kolačiće kako bi osigurala bolje korisničko iskustvo. Korištenjem ove stranice pristajete na
      upotrebu kolačića u skladu s našim Pravilima o kolačićima. Hvala vam na posjeti!
    </p>
  </CookieConsent>
);

export default CookiesConsent;
