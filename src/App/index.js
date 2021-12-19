import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "pages/Welcome";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
}
