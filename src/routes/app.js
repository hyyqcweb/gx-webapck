import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Header } from 'Components';
import './app.less';
import 'Static/iconfont.less';

const App = ({ app, loading }) => {
  console.log('test', app);
  console.log('test', loading);
    return (
    <div className="container">
      <Header />
      <div className='content'>
        hello
        <div>
          <span className="iconfont icon-export" style={{fontSize: 50}}/>
        </div>
      </div>
    </div>
  );
};
App.propTypes = {
  app: PropTypes.object,
  loading: PropTypes.object,
};

export default connect(({ app, loading }) => ({ app, loading }))(App);
