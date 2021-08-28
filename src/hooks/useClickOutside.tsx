import { useEffect, useRef } from 'react';

export const useClickOutside = (cb: Function) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref && ref.current && !ref.current.contains(e.target)) cb();
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref]);
  return ref;
};
