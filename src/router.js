import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import PropTypes from 'prop-types';
import App from './routes/app';

const Routers = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
  );
};
Routers.propTypes = {
  history: PropTypes.object,
};

export default Routers;
