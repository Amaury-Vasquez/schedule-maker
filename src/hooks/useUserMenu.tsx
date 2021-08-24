import { useContext, useState } from 'react';

import { useHistory } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineSetting,
} from 'react-icons/ai';

import { AppContext } from '../Context/AppContext';
import { useRef } from 'react';
import { useEffect } from 'react';

export const useUserMenu = (cb: Function) => {
  const history = useHistory();
  const { setLogged, setUserData } = useContext(AppContext);
  const ref = useRef<HTMLDivElement>(null);

  const logOut = () => {
    setLogged && setLogged(false);
    setUserData && setUserData({});
    localStorage.clear();
    sessionStorage.clear();
    history.push('/');
  };

  const options = [
    {
      cb: () => history.push('/'),
      Icon: AiOutlineHome,
      text: 'home',
    },
    {
      cb: () => history.push('/settings'),
      Icon: AiOutlineSetting,
      text: 'settings',
    },
    { cb: logOut, Icon: AiOutlineLogout, text: 'logout' },
  ];

  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref && ref.current && !ref.current.contains(e.target)) cb();
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref]);
  return { options, ref };
};
