import React from 'react';
import {connect} from 'dva'

const App = ({app, loading}) => {
    console.log('test',app);
    console.log('test',loading);
    return (
        <div>
            hello
        </div>
    )
};
export default connect(({app, loading}) => ({app, loading}))(App);
