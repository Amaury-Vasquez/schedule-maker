import React from 'react';

import { Spin } from './styles';

export const Loader = (props: {large: boolean}) => {
  return <Spin large={props.large} />;
};
