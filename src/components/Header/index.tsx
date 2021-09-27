import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineSchedule } from 'react-icons/ai';

import { UserMenu } from '../UserMenu';
import { Dropdown } from '../Dropdown';
import { UserButton, HeaderContainer, Title } from './styles';

export const Header = () => {
  return (
    <section>
      <HeaderContainer>
        <Title to="/">
          <AiOutlineSchedule />
          <p> Schedule generator</p>
        </Title>
        <Dropdown Button={UserButton} Cover={FaUserCircle} Content={UserMenu} />
      </HeaderContainer>
    </section>
  );
};
