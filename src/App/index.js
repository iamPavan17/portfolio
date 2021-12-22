import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "components/Header";
import About from "pages/About";
import { ABOUT_ROUTE } from "pages/About/constants";

export default function App() {
  return (
    <React.Fragment>
      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path={ABOUT_ROUTE} component={About} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
