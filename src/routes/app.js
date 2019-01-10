import React from 'react';
import {connect} from 'dva'
import  './app.less'
import Header from 'Components'

const App = ({app, loading}) => {
    console.log('test',app);
    console.log('test',loading);
    return (
        <div className='container'>
            <Header />
            hello
        </div>
    )
};
export default connect(({app, loading}) => ({app, loading}))(App);
