import { Fragment } from 'react';

import { Header } from '../Header';
import { Page } from '../../styles/templates';

export const Layout = (props: { children: JSX.Element }) => {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      <Page header={true}>{children}</Page>
    </Fragment>
  );
};
