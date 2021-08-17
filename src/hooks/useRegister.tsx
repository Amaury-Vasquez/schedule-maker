import {useContext, useState } from 'react';
import { AiFillLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

import { RegisterValues, UserData } from '../interfaces';
import { AppContext } from '../Context/AppContext';

export const useRegister = () => {
  const { setUserData, setLogged } = useContext(AppContext);
  const [badRegister, setBadRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const registerUser = async (data: RegisterValues) => {
    setLoading(true);
    const { email, rememberUser, password, username } = data;
    const res = await fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({email, password, username})
    });
    if(res.status === 201) {
      const user = await res.json();
      const userData: UserData = {_id: user.data.insertedId, email, schedule: {subjects: [], days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']}, username };
      setLogged && setLogged(true);
      setUserData && setUserData(() => userData);
      sessionStorage.setItem('userData', JSON.stringify(userData));
      sessionStorage.setItem('isLogged', 'true');
      if (rememberUser) {
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('isLogged', 'true');
      }
    }
    else setBadRegister(true);
    setLoading(false);
  };
  const registerFields = [
    { Component: <AiOutlineMail/>, value: 'email' },
    { Component: <AiOutlineUser />, value: 'username' },
    { Component: <AiFillLock />, value: 'password' },
    { Component: <AiFillLock />, value: 'repeatPassword' },
  ];
  return {badRegister, loading, registerFields, registerUser };
};
