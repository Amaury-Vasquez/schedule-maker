import React from 'react';

import { Loader } from '../Loader';
import { Page } from '../../styles/templates';

export const LoadingScreen = () => {
  return (
    <Page>
      <Loader large={true} />
    </Page>
  );
};
