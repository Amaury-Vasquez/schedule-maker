import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineSetting,
} from 'react-icons/ai';

import { AppContext } from '../Context/AppContext';

export const useUserMenu = () => {
  const history = useHistory();
  const { setLogged, setUserData } = useContext(AppContext);

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
  return { options };
};
