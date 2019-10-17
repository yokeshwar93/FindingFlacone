import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import SelectionContainer from '../containers/SelectionContainer';
import ResultsContainer from '../containers/ResultsContainer';



export default props => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={SelectionContainer} />
      <Route path="/result" component={ResultsContainer} />

    </Switch>
  </Router>
);
