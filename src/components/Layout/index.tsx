import { Fragment } from 'react';

import { Header } from '../Header';
import { Page } from '../../styles/templates';

export const Layout = (props: { children: JSX.Element; isLogged: boolean }) => {
  const { children, isLogged } = props;
  return (
    <Fragment>
      {isLogged && <Header />}
      <Page header={isLogged}>{children}</Page>
    </Fragment>
  );
};
