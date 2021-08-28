import { AiOutlineClose } from 'react-icons/ai';
import { useClickOutside } from '../../hooks/useClickOutside';

import { useUserMenu } from '../../hooks/useUserMenu';
import { Close, Option, Menu } from './styles';

export const UserMenu = (props: { cb: Function; willFade: boolean }) => {
  const { cb, willFade } = props;
  const ref = useClickOutside(cb);
  const { isLogged, login, options } = useUserMenu();
  return (
    <Menu aria-disabled={willFade} ref={ref} willFade={willFade}>
      <Close>
        <AiOutlineClose onClick={() => cb()} />
      </Close>
      {isLogged ? (
        options.map((option, i) => (
          <Option
            key={option.text + i}
            name={option.text}
            onClick={() => {
              option.cb();
              cb();
            }}
          >
            <span>
              {option.text} {<option.Icon />}
            </span>
          </Option>
        ))
      ) : (
        <Option
          name={login.text}
          onClick={() => {
            login.cb();
            cb();
          }}
        >
          <span>
            {login.text} {<login.Icon />}
          </span>
        </Option>
      )}
    </Menu>
  );
};
