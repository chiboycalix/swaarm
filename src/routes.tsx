/** @format */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Launches, CompareLaunches } from './Pages';
import { Header, Footer } from './Components';

const Routes: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/launches" component={Launches} />
        <Route path="/compare" component={CompareLaunches} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Routes;
