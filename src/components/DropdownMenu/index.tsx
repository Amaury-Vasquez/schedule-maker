import { ElementType, useState } from 'react';

import { Button, Dropdown } from './styles';

export const DropdowMenu = (props: {
  Menu: ElementType;
  Cover: ElementType;
}) => {
  const [active, setActive] = useState(false);
  const [willFade, setFade] = useState(false);
  const { Cover, Menu } = props;

  const handleClick = () => {
    if (active) {
      setFade(true);
      setTimeout(() => {
        setActive(false);
        setFade(false);
      }, 300);
    } else setActive(true);
  };
  return (
    <Dropdown>
      <Button>
        <Cover aria-disabled={willFade} onClick={() => handleClick()} />
      </Button>
      {active && <Menu cb={() => handleClick()} willFade={willFade} />}
    </Dropdown>
  );
};
