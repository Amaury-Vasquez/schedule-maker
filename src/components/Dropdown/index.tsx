import { ElementType } from 'react';

import { useToggle } from '../../hooks/useToggle';
import { DropdownDiv } from './styles';

export const Dropdown = (props: {
  Button: ElementType;
  Content: ElementType;
  Cover: ElementType;
}) => {
  const { active, handleClick, willFade } = useToggle();
  const { Button, Cover, Content } = props;

  return (
    <DropdownDiv>
      <Button aria-disabled={willFade} name="menu button">
        <Cover onClick={() => handleClick()} />
      </Button>
      {active && <Content cb={() => handleClick()} willFade={willFade} />}
    </DropdownDiv>
  );
};
