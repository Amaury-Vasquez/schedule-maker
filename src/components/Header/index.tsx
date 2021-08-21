import { useRef, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineSchedule } from 'react-icons/ai';

import { useUserMenu } from '../../hooks/useUserMenu';
import {
  Close,
  DropDown,
  HeaderContainer,
  Option,
  Title,
  UserIcon,
  UserMenu,
} from './styles';
import { useEffect } from 'react';

export const Header = () => {
  const { options } = useUserMenu();
  const [active, setActive] = useState(false);
  const [willFade, setFade] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (!active) setActive(true);
    else {
      setFade(true);
      setTimeout(() => {
        setFade(false);
        setActive(false);
      }, 300);
    }
  };
  useEffect(() => {
    if (active && ref.current) {
      console.log('focused', ref);
      ref.current.focus();
    } else ref.current && ref.current.blur();
  }, [active, ref]);

  return (
    <HeaderContainer>
      <Title to="/">
        <AiOutlineSchedule />
        <p> Schedule generator</p>
      </Title>
      <DropDown
        active={active}
        onFocus={() => {
          console.log(active);
          if (!active && ref.current) ref.current.focus();
        }}
      >
        <UserIcon disabled={willFade} onClick={() => handleClick()}>
          <FaUserCircle />
        </UserIcon>
        <UserMenu
          onFocus={() => console.log('focused')}
          onBlur={() => {
            console.log(ref);
            handleClick();
          }}
          ref={ref}
          willFade={willFade}
        >
          <Close>
            <AiOutlineClose onClick={() => handleClick()} />
          </Close>
          {options.map((option, i) => (
            <Option
              key={option.text + i}
              onClick={() => {
                handleClick();
                option.cb();
              }}
            >
              <span>
                {option.text} {<option.Icon />}
              </span>
            </Option>
          ))}
        </UserMenu>
      </DropDown>
    </HeaderContainer>
  );
};
