import React from 'react';
import {connect} from 'dva'
import  './app.less'

const App = ({app, loading}) => {
    console.log('test',app);
    console.log('test',loading);
    return (
        <div className='container'>
            hello
        </div>
    )
};
export default connect(({app, loading}) => ({app, loading}))(App);
