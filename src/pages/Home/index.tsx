import { Fragment } from "react"
import { Helmet } from "react-helmet-async"

import { Page } from "../../styles/templates"

export const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title> Home | Schedule-maker </title>
      </Helmet>
      <Page></Page>
    </Fragment>
  );
}