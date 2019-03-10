import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import PropTypes from 'prop-types';
import App from './routes/app';
import Intl from './Intl';

const Routers = ({ history }) => {
  return (
    <Intl>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={App} />
        </Switch>
      </Router>
    </Intl>
  );
};
Routers.propTypes = {
  history: PropTypes.object,
};

export default Routers;
