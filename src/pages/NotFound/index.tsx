import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

import { Error404, ErrorInfo, ErrorMessage } from './styles';
import { AppContext } from '../../Context/AppContext';

export const NotFound = () => {
  const { isLogged } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!isLogged) history.push('/auth');
  }, [isLogged, history]);
  return (
    <Fragment>
      <Helmet>
        <title> {'Page not found | Schedule-generator'} </title>
      </Helmet>
      <Error404>
        <ErrorMessage>{'404'}</ErrorMessage>
        <ErrorInfo>
          The page you're looking for doesn't exists or we couldn't find it.
        </ErrorInfo>
      </Error404>
    </Fragment>
  );
};
