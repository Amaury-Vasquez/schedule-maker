import { Helmet } from 'react-helmet-async';

import { Schedule } from '../../components/Schedule';

export const Home = () => {
  return (
    <section>
      <Helmet>
        <title> Home | Schedule-generator </title>
      </Helmet>
      <Schedule />
    </section>
  );
};
