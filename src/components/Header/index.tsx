import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineSchedule } from 'react-icons/ai';

import { UserMenu } from '../UserMenu';
import { DropdowMenu } from '../DropdownMenu';
import { HeaderContainer, Title } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <Title to="/">
        <AiOutlineSchedule />
        <p> Schedule generator</p>
      </Title>
      <DropdowMenu Cover={FaUserCircle} Menu={UserMenu} />
    </HeaderContainer>
  );
};
