import { AiOutlineClose } from 'react-icons/ai';

import { useUserMenu } from '../../hooks/useUserMenu';
import { Close, Option, Menu } from './styles';

export const UserMenu = (props: { cb: Function; willFade: boolean }) => {
  const { cb, willFade } = props;
  const { options, ref } = useUserMenu(cb);
  return (
    <Menu ref={ref} willFade={willFade}>
      <Close aria-disabled={willFade}>
        <AiOutlineClose onClick={() => cb()} />
      </Close>
      {options.map((option, i) => (
        <Option
          key={option.text + i}
          onClick={() => {
            option.cb();
            cb();
          }}
        >
          <span>
            {option.text} {<option.Icon />}
          </span>
        </Option>
      ))}
    </Menu>
  );
};
