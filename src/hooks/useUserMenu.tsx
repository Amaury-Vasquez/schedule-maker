import { useContext, useState } from 'react';

import { useHistory } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineSetting,
} from 'react-icons/ai';

import { AppContext } from '../Context/AppContext';

export const useUserMenu = () => {
  const history = useHistory();
  const { isLogged, setLogged, setUserData } = useContext(AppContext);

  const logOut = () => {
    setLogged && setLogged(false);
    setUserData && setUserData({});
    localStorage.clear();
    sessionStorage.clear();
    history.push('/auth');
  };

  const login = {
    cb: () => history.push('/auth'),
    Icon: AiOutlineLogin,
    text: 'login',
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

  return { isLogged, login, options };
};
