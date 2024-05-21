'use client';

import React from 'react';
import { useAppContext } from '../contexts/store';
import { ActionTypes } from '../types/actionTypes';
import { UserLanguage } from '../types/appState';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { setLocalStorageItem, getLocalStorageItem } from '../utils/localStorage';
// import Image from 'next/image';
// import croatianFlag from '../img/icons/country-flags/croatianFlag.svg';
// import englishFlag from '../img/icons/country-flags/englishFlag.svg';

const LanguageSwitch = () => {
  const {
    state: { userLang },
    dispatch,
  } = useAppContext();

  const router = useRouter();
  const pathname = usePathname();
  const paramsControler = useSearchParams();

  React.useEffect(() => {
    const checkParams = paramsControler.get('lang');

    const checkLocalStorage = getLocalStorageItem('@dinko-vidovic-user-language');

    if (checkParams) {
      dispatch({ type: ActionTypes.SET_USER_LANG, payload: checkParams === 'hr' ? UserLanguage.hr : UserLanguage.en });
      setLocalStorageItem('@dinko-vidovic-user-language', checkParams);
    } else if (checkLocalStorage) {
      dispatch({ type: ActionTypes.SET_USER_LANG, payload: checkLocalStorage });

      const newUrlParams = new URLSearchParams(window.location.search);
      newUrlParams.set('lang', checkLocalStorage);
      const searchString = newUrlParams.toString();
      router.replace(`?${searchString}`);
    } else {
      dispatch({ type: ActionTypes.SET_USER_LANG, payload: UserLanguage.hr });
      const newUrlParams = new URLSearchParams(window.location.search);
      newUrlParams.set('lang', UserLanguage.hr);
      const searchString = newUrlParams.toString();
      router.replace(`?${searchString}`);
    }
  }, [dispatch, paramsControler, router]);

  const handleLangSwitch = (payloadF: UserLanguage) => {
    dispatch({ type: ActionTypes.SET_USER_LANG, payload: payloadF });

    const newUrlParams = new URLSearchParams(window.location.search);
    newUrlParams.set('lang', payloadF);

    const searchString = newUrlParams.toString();

    router.replace(`?${searchString}`);

    setLocalStorageItem('@dinko-vidovic-user-language', payloadF);

    window.location.reload();
  };

  return (
    <div
      className='bg-dinko-tamnoplava fixed bottom-2 right-2 py-2 px-4 z-[999]'
      onClick={() => handleLangSwitch(userLang === UserLanguage.hr ? UserLanguage.en : UserLanguage.hr)}
    >
      <h2 className='text-alt-bila'>Lang switch</h2>
      {/* {userLang === UserLanguage.hr ? (
        <Image width={30} height={30} alt='croatian flag' src={croatianFlag} />
      ) : (
        <Image width={30} height={30} alt='croatian flag' src={englishFlag} />
      )} */}
    </div>
  );
};

export default LanguageSwitch;