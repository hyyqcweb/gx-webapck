import React from 'react';
import {connect} from 'dva'
import styles from './app.less'

const App = ({app, loading}) => {
    console.log('test',app);
    console.log('test',loading);
    return (
        <div className={styles.container}>
            hello
        </div>
    )
};
export default connect(({app, loading}) => ({app, loading}))(App);
