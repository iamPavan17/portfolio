import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "components/Header";
import About from "pages/About";
import Resume from "pages/Resume";
import Projects from "pages/Projects";
import Contact from "pages/Contact";
import NotFound from "pages/NotFound";

import { ABOUT_ROUTE } from "pages/About/constants";
import { RESUME_ROUTE } from "pages/Resume/constants";
import { PROJECTS_ROUTE } from "pages/Projects/constants";
import { CONTACT_ROUTE } from "pages/Contact/constants";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={ABOUT_ROUTE} component={About} />
          <Route exact path={RESUME_ROUTE} component={Resume} />
          <Route exact path={PROJECTS_ROUTE} component={Projects} />
          <Route exact path={CONTACT_ROUTE} component={Contact} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
