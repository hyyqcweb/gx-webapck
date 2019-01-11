import React from 'react';
import {connect} from 'dva'
import  './app.less'
import Header from 'Components'
import '../public/static/iconfont.less'

const App = ({app, loading}) => {
    console.log('test',app);
    console.log('test',loading);
    return (
        <div className='container'>
            <Header />
            hello
            <div>
                <span className="iconfont icon-export" style={{fontSize:50}}/>
            </div>
        </div>
    )
};
export default connect(({app, loading}) => ({app, loading}))(App);
