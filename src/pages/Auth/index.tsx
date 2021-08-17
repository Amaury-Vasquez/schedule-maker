import { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Page } from "../../styles/templates";
import { UserAuth } from "../../components/UserAuth";
import { AppContext } from "../../Context/AppContext";
import { useEffect } from "react";

export const Auth = () => {
  const history = useHistory();
  const {isLogged} = useContext(AppContext);

  useEffect(() => {
    if(isLogged) 
      history.push('/');
  }, [isLogged])
  return (
    <Fragment>
      <Helmet>
        <title> User Auth | Schedule-maker </title>
      </Helmet>
      <Page>
        <UserAuth />
      </Page>
    </Fragment>
  );
}