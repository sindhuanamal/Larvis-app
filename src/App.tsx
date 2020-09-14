import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BeverageManager from './components/BeverageManager';
import Operator from './components/Operator';

function App() {
  return (
    <React.Suspense fallback={null}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/beverageManager">
            <BeverageManager />
          </Route>
          <Route exact path="/operator">
            <Operator />
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  )
}

export default App;

