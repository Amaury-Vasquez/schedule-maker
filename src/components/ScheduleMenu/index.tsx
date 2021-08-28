import { ElementType } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { useToggle } from '../../hooks/useToggle';
import { List, Option, OptionsMenu } from './styles';
import { useSchedule } from '../../hooks/useSchedule';

export const ScheduleMenu = () => {
  const { options } = useSchedule();
  const { active, handleClick, willFade } = useToggle();
  const { innerWidth } = window;

  return (
    <OptionsMenu aria-disabled={willFade}>
      <button onClick={() => handleClick()}>
        <AiOutlineMenu />
      </button>
      <List
        aria-label="List of Tabs"
        role="menu"
        active={!(innerWidth <= 700) || active}
        willFade={willFade}
      >
        {options.map((option, i) => (
          <Option
            key={option.text + i}
            onClick={() => {
              option.cb();
              innerWidth <= 700 && handleClick();
            }}
          >
            {option.text}
            {<option.Icon />}
          </Option>
        ))}
      </List>
    </OptionsMenu>
  );
};
