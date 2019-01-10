import React from 'react';
import {connect} from 'dva'

const App = ({app}) => {
    console.log('test',app);
    return (
        <div>
            hello
        </div>
    )
};
export default connect(({app, loading}) => ({app, loading}))(App);
