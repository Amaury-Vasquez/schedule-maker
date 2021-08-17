import { useState } from 'react';

import { LoginForm } from './LoginForm';
import {RegisterForm} from "./RegisterForm";


export const UserAuth = () => {  
  const onTabClick = (i: number) => {
    setForm(Forms[i])
  } 
  const [ActiveForm, setForm] = useState<JSX.Element>(<LoginForm cb={onTabClick} focused={0}/>);
  const Forms = [<LoginForm cb={onTabClick} focused={0} />, <RegisterForm focused={1} cb={onTabClick}/> ];
  return ActiveForm;
};
