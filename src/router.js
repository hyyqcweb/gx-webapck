import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import App from './routes/app'

export default ({ history }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={App} />
            </Switch>
        </Router>
    )
}
