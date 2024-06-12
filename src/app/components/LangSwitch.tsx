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
      console.log('ALO vamo');
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
      <h2 className='text-alt-bila'>Lang switch</h2>
    </div>
  );
};

export default LanguageSwitch;
