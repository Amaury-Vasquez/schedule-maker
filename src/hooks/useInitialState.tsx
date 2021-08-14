import { useState } from "react";

export const useInitialState = () => {
  const [isLogged, setLogged] = useState(false);
  return {isLogged, setLogged};
}