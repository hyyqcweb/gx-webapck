import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Header } from 'Components';
import UserList from './list';
import './app.less';
import 'Static/iconfont.less';

const App = ({ app, loading, dispatch }) => {
  const { List } = app;
  const handleClick = () => {
    dispatch({
      type: 'app/getUser',
    });
  };
  const listProps = {
    dataSource: List,
    loading: loading.effects['app/getUser'],
  };

  return (
    <div className="container">
      <Header />
      <div className="content">
        <Button onClick={handleClick} icon="plus-circle">获取个人信息</Button>
        <UserList {...listProps} />
      </div>
    </div>
  );
};
App.propTypes = {
  app: PropTypes.object,
  loading: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(({ app, loading }) => ({ app, loading }))(App);
