import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'Pages/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={['/', '/home']} component={Home} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
