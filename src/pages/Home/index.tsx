import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import { Schedule } from '../../components/Schedule';

export const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title> Home | Schedule-maker </title>
      </Helmet>
      <Schedule />
    </Fragment>
  );
};
