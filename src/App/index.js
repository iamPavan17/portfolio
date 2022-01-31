import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import About from "pages/About";
import Projects from "pages/Projects";
import Contact from "pages/Contact";
import NotFound from "pages/NotFound";

import { HOME_ROUTE } from "pages/Home/constants";
import { ABOUT_ROUTE } from "pages/About/constants";
import { PROJECTS_ROUTE } from "pages/Projects/constants";
import { CONTACT_ROUTE } from "pages/Contact/constants";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={HOME_ROUTE} component={Home} />
          <Route exact path={ABOUT_ROUTE} component={About} />
          <Route exact path={PROJECTS_ROUTE} component={Projects} />
          <Route exact path={CONTACT_ROUTE} component={Contact} />

          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}
