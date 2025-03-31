'use client';

import React from 'react';
import { useAppContext } from '../contexts/store';
import { ActionTypes } from '../types/actionTypes';
import { UserLanguage } from '../types/appState';
import { useRouter, useSearchParams } from 'next/navigation';
import { setLocalStorageItem, getLocalStorageItem } from '../utils/localStorage';

const LanguageSwitch = () => {
  const { dispatch } = useAppContext();

  const router = useRouter();
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const checkLocalStorage = getLocalStorageItem('@dinko-vidovic-user-language');
  React.useEffect(() => {
    if (typeof checkParams === 'string' && !checkLocalStorage) {
      dispatch({
        type: ActionTypes.SET_USER_LANG,
        payload: checkParams === UserLanguage.hr ? UserLanguage.hr : UserLanguage.en,
      });
      setLocalStorageItem(
        '@dinko-vidovic-user-language',
        checkParams === UserLanguage.hr ? UserLanguage.hr : UserLanguage.en
      );
    } else if (checkLocalStorage && typeof checkParams !== 'string') {
      dispatch({ type: ActionTypes.SET_USER_LANG, payload: checkLocalStorage });
      const newUrlParams = new URLSearchParams(window.location.search);
      newUrlParams.set('lang', checkLocalStorage);
      const searchString = newUrlParams.toString();
      router.replace(`?${searchString}`);
    } else if (!checkLocalStorage && typeof checkParams !== 'string') {
      dispatch({ type: ActionTypes.SET_USER_LANG, payload: UserLanguage.hr });
      const newUrlParams = new URLSearchParams(window.location.search);
      newUrlParams.set('lang', UserLanguage.hr);
      const searchString = newUrlParams.toString();
      router.replace(`?${searchString}`);
    }
  }, [dispatch, checkParams, router, checkLocalStorage]);

  const handleLangSwitch = (payloadF: UserLanguage) => {
    dispatch({ type: ActionTypes.SET_USER_LANG, payload: payloadF });

    const newUrlParams = new URLSearchParams(window.location.search);
    newUrlParams.set('lang', payloadF);

    const searchString = newUrlParams.toString();

    router.replace(`?${searchString}`);
    setLocalStorageItem('@dinko-vidovic-user-language', payloadF);
    router.refresh();
  };

  return (
    <div
      className='bg-dinko-tamnoplava fixed bottom-2 right-2 py-2 px-4 z-[999]'
      onClick={() => handleLangSwitch(checkParams === UserLanguage.hr ? UserLanguage.en : UserLanguage.hr)}
    >
      {checkParams === UserLanguage.hr && (
        <div className='flex items-center justify-start gap-2 text-alt-bila'>
          <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
            <path fill='#fff' d='M1 11H31V21H1z'></path>
            <path d='M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z' fill='#ea3323'></path>
            <path
              d='M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z'
              transform='rotate(180 16 24)'
              fill='#100e91'
            ></path>
            <path
              d='M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z'
              opacity='.15'
            ></path>
            <path
              d='M16.001,22h0c2.524,0,4.59-2.065,4.59-4.59v-5.454H11.412v5.454c0,2.524,2.065,4.59,4.59,4.59h0Z'
              fill='#ea3323'
            ></path>
            <path
              d='M16.001,21.926h0c2.476,0,4.502-2.026,4.502-4.502v-5.38H11.499v5.38c0,2.476,2.026,4.502,4.502,4.502Z'
              fill='#fff'
            ></path>
            <path d='M13.399,12.214h-1.733v1.904h1.733v-1.904Z' fill='#ea3323'></path>
            <path d='M13.399,16.021h1.733v-1.904h-1.733v1.904Z' fill='#ea3323'></path>
            <path d='M11.667,17.414c0,.173,.011,.343,.031,.511h1.702v-1.904h-1.733v1.393Z' fill='#ea3323'></path>
            <path d='M16.865,16.021h-1.733v1.904h1.733v-1.904Z' fill='#ea3323'></path>
            <path d='M16.865,19.828h1.733v-1.904h-1.733v1.904Z' fill='red'></path>
            <path d='M18.598,20.87c.384-.29,.719-.642,.989-1.041h-.989v1.041Z' fill='#ea3323'></path>
            <path d='M13.4,19.828h1.733v-1.904h-1.733v1.904Z' fill='#ea3323'></path>
            <path d='M12.409,19.828c.271,.4,.606,.752,.991,1.043v-1.043h-.991Z' fill='#ea3323'></path>
            <path
              d='M16.3,21.732c.192-.013,.38-.039,.565-.077v-1.827h-1.733v1.827c.184,.038,.372,.063,.563,.077,.202,.012,.404,.012,.605,0h0Z'
              fill='#ea3323'
            ></path>
            <path d='M20.298,17.925c.02-.168,.031-.339,.031-.513v-1.391h-1.731v1.904h1.7Z' fill='#ea3323'></path>
            <path d='M16.865,16.021h1.733v-1.904h-1.733v1.904Z' fill='#ea3323'></path>
            <path d='M16.865,12.214h-1.733v1.904h1.733v-1.904Z' fill='#ea3323'></path>
            <path d='M20.329,14.117v-1.904h-1.731v1.904h1.731Z' fill='#ea3323'></path>
            <path
              d='M20.426,11.9l1.074-2.435-.818-1.322-1.356,.502-.952-1.088-1.255,.719-1.119-.916-1.119,.916-1.255-.719-.952,1.088-1.356-.502-.819,1.322,1.073,2.436c1.352-.612,2.851-.953,4.427-.953s3.074,.341,4.426,.952h0Z'
              fill='#fff'
            ></path>
            <path
              d='M12.705,8.753l-.002,.002-1.345-.498-.753,1.215,.288,.655,.73,1.658c.545-.241,1.114-.439,1.701-.588l-.62-2.444h0Z'
              fill='#0093dd'
            ></path>
            <path
              d='M14.893,8.387l-.002,.002-1.244-.713-.942,1.077,.62,2.444c.576-.147,1.169-.247,1.777-.297l-.208-2.513h0Z'
              fill='#100e91'
            ></path>
            <path
              d='M17.112,8.388l-.003,.002-1.109-.908-1.107,.907,.208,2.513c.296-.024,.596-.038,.899-.038s.605,.013,.903,.038l.209-2.513h0Z'
              fill='#0093dd'
            ></path>
            <path
              d='M19.3,8.754h-.003s-.944-1.078-.944-1.078l-1.241,.711-.209,2.513c.608,.05,1.201,.151,1.777,.297l.621-2.444h0Z'
              fill='#100e91'
            ></path>
            <path
              d='M20.375,11.785l1.02-2.312-.753-1.215-1.342,.497-.621,2.444c.585,.149,1.152,.347,1.695,.587h0Z'
              fill='#0093dd'
            ></path>
            <path
              d='M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z'
              fill='#fff'
              opacity='.2'
            ></path>
          </svg>

          <p>Hrvatski</p>
        </div>
      )}

      {checkParams === UserLanguage.en && (
        <div className='flex items-center justify-start gap-2 text-alt-bila'>
          <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
            <rect x='1' y='4' width='30' height='24' rx='4' ry='4' fill='#071b65'></rect>
            <path
              d='M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z'
              fill='#fff'
            ></path>
            <path d='M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z' fill='#b92932'></path>
            <path d='M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z' fill='#b92932'></path>
            <path
              d='M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z'
              fill='#fff'
            ></path>
            <rect x='13' y='4' width='6' height='24' fill='#fff'></rect>
            <rect x='1' y='13' width='30' height='6' fill='#fff'></rect>
            <rect x='14' y='4' width='4' height='24' fill='#b92932'></rect>
            <rect x='14' y='1' width='4' height='30' transform='translate(32) rotate(90)' fill='#b92932'></rect>
            <path
              d='M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z'
              fill='#b92932'
            ></path>
            <path
              d='M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z'
              fill='#b92932'
            ></path>
            <path
              d='M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z'
              opacity='.15'
            ></path>
            <path
              d='M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z'
              fill='#fff'
              opacity='.2'
            ></path>
          </svg>
          <p>English</p>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
