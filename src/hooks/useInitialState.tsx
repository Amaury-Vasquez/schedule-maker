import { useState } from "react";
import { UserData } from "../interfaces";

export const useInitialState = () => {
  const [isLogged, setLogged] = useState(() => 
       (sessionStorage.getItem('isLogged') || localStorage.getItem('isLogged')) === 'true'
  );
  const [userData, setUserData] = useState<UserData | undefined>(() => {
    const sessionCache = sessionStorage.getItem('userData');
    const localCache = sessionStorage.getItem('userData');
    return localCache? JSON.parse(localCache) : sessionCache? JSON.parse(sessionCache): undefined;
  }
  );
  return {isLogged, setLogged, setUserData, userData};
}