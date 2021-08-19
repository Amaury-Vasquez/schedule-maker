import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { useUserMenu } from '../../hooks/useUserMenu';
import {
  Close,
  DropDown,
  HeaderContainer,
  Option,
  UserIcon,
  UserMenu,
} from './styles';

export const Header = () => {
  const { options } = useUserMenu();
  const [active, setActive] = useState(false);
  return (
    <HeaderContainer>
      <DropDown active={active}>
        <UserIcon onClick={() => setActive(!active)}>
          <FaUserCircle />
        </UserIcon>
        <UserMenu>
          <Close onClick={() => setActive(false)}>
            <AiOutlineClose />
          </Close>
          {options.map((option, i) => (
            <Option key={option.text + i} onClick={() => option.cb()}>
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
