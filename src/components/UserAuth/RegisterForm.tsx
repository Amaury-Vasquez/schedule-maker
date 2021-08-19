import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { Loader } from '../Loader';
import { TabMenu } from '../TabMenu';
import { SubmitButton } from '../SubmitButton';
import { registerUserSchema } from '../../schemas';
import { useRegister } from '../../hooks/useRegister';
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

export const RegisterForm = (props: { cb: Function; focused: number }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(registerUserSchema) });
  const { badRegister, loading, registerFields, registerUser, showPassword } =
    useRegister();
  const { cb, focused } = props;

  return (
    <Auth register={true}>
      <TabMenu
        cb={(i: number) => cb(i)}
        focused={focused}
        tabs={['login', 'register']}
      />
      {loading ? (
        <LoadScreen>
          <Loader />
        </LoadScreen>
      ) : (
        <Fragment>
          <Form onSubmit={handleSubmit(registerUser)}>
            {registerFields.map((field, i) => (
              <Fragment key={'register' + field.value + i}>
                {errors[field.value] && (
                  <SpanAlert role="alert">
                    {'* ' +
                      (errors[field.value].message.includes('ref:password')
                        ? 'passwords do not match'
                        : errors[field.value].message.replace(/\"/g, ''))}
                  </SpanAlert>
                )}
                <Wrapper>
                  {field.Component}
                  <Input
                    {...register(field.value, { required: true })}
                    placeholder={field.value}
                    type={
                      field.value.toLowerCase().includes('password')
                        ? showPassword
                          ? 'text'
                          : 'password'
                        : field.value.includes('email')
                        ? 'email'
                        : 'text'
                    }
                  />
                  {field.Show && field.Show}
                </Wrapper>
              </Fragment>
            ))}
            {badRegister && (
              <AuthError role="alertdialog">
                <span> {'Something went wrong! Try again'} </span>
              </AuthError>
            )}
            <ConfirmSubmit>
              <Remember>
                <input {...register('rememberUser')} type="checkbox" />
                {'remember me'}
              </Remember>
              <SubmitButton text="register" />
            </ConfirmSubmit>
          </Form>
        </Fragment>
      )}
    </Auth>
  );
};
