import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  const pages = [
    {
      pageLink: "/pricing",
      component: Pricing,
    },
    {
      pageLink: "/",
      component: Landing,
    },
  ];

  return (
    <>
      <StylesProvider>
        <Router>
          <Switch>
            {pages.map((page, idx) => {
              return (
                <Route
                  exact
                  path={page.pageLink}
                  render={({ match }) => <page.component />}
                  key={idx}
                />
              );
            })}
          </Switch>
        </Router>
      </StylesProvider>
    </>
  );
};

export default App;
