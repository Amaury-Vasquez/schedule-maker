import { useState } from 'react';

export const useToggle = () => {
  const [active, setActive] = useState(false);
  const [willFade, setFade] = useState(false);

  const handleClick = (time = 200) => {
    if (active) {
      setFade(true);
      setTimeout(() => {
        setActive(false);
        setFade(false);
      }, time);
    } else setActive(true);
  };

  return { active, handleClick, willFade };
};
