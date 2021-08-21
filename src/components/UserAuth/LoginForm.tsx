import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { BiShowAlt } from 'react-icons/bi';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

import { Loader } from '../Loader';
import { TabMenu } from '../TabMenu';
import { SubmitButton } from '../SubmitButton';
import { useLogin } from '../../hooks/useLogin';
import {
  Auth,
  AuthError,
  ConfirmSubmit,
  Form,
  Input,
  LoadScreen,
  Remember,
  SpanAlert,
  Wrapper,
} from './styles';

export const LoginForm = (props: { cb: Function; focused: number }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { badAuth, loading, logUser, setShow, showPassword } = useLogin();
  const { cb, focused } = props;

  return loading ? (
    <Loader />
  ) : (
    <Auth register={false}>
      <TabMenu
        cb={(i: number) => cb(i)}
        focused={focused}
        tabs={['login', 'register']}
      />
      <Fragment>
        <Form onSubmit={handleSubmit(logUser)}>
          {errors.username && (
            <SpanAlert> {'* this field is required'} </SpanAlert>
          )}
          <Wrapper>
            <AiOutlineUser />
            <Input
              {...register('username', { required: true })}
              placeholder="username"
            />
          </Wrapper>
          {errors.password && (
            <SpanAlert> {'* this field is required'} </SpanAlert>
          )}
          <Wrapper>
            <AiOutlineLock />
            <Input
              {...register('password', { required: true })}
              placeholder="username"
              type={showPassword ? 'text' : 'password'}
            />
            <BiShowAlt onClick={() => setShow(!showPassword)} />
          </Wrapper>
          {badAuth && (
            <AuthError role="alertdialog">
              <span> {"User name doesn't exist or wrong password"} </span>
            </AuthError>
          )}
          <ConfirmSubmit>
            <Remember>
              <input {...register('rememberUser')} type="checkbox" />
              {'remember me'}
            </Remember>
            <SubmitButton text="login" />
          </ConfirmSubmit>
        </Form>
      </Fragment>
    </Auth>
  );
};
