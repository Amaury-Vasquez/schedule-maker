import { useContext, useState } from 'react';

import { LoginValues, UserData } from '../interfaces';
import { AppContext } from '../Context/AppContext';

export const useLogin = () => {
  const { setUserData, setLogged } = useContext(AppContext);
  const [badAuth, setBadAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShow] = useState(false);

  const logUser = async (data: LoginValues) => {
    setLoading(true);
    const { password, rememberUser, username } = data;
    const res = await fetch('http://localhost:8000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((data) => {
      setLoading(false);
      return data;
    });
    if (res.status === 200) {
      setBadAuth(false);
      const user = await res.json();
      const { _id, email, schedule } = user.data;
      const userData: UserData = { _id, email, schedule, username };
      setUserData && setUserData(() => userData);
      setLogged && setLogged(true);

      if (rememberUser) {
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('isLogged', 'true');
      } else {
        sessionStorage.setItem('userData', JSON.stringify(userData));
        sessionStorage.setItem('isLogged', 'true');
      }
    } else setBadAuth(true);
  };
  return { badAuth, loading, logUser, setShow, showPassword };
};
