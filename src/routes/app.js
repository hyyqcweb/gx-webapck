import React from 'react';
import { Row, Col, Dropdown, Menu, Button, Pagination, Calendar } from 'antd';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Header } from 'Components';
import UserList from './list';
import './app.less';
import 'Static/iconfont.less';

const App = ({ app, loading, dispatch, intl: { formatMessage } }) => {
  const { List, i18n } = app;
  const handleClick = () => {
    dispatch({
      type: 'app/getUser',
    });
  };
  const listProps = {
    dataSource: List,
    loading: loading.effects['app/getUser'],
  };
  const changeLang = (e) => {
    dispatch({
      type: 'app/changeLang',
      payload: {
        value: e.key,
      },
    });
  };
  const menu = (
    <Menu
      onClick={changeLang}
      selectedKeys={[i18n]}
    >
      <Menu.Item key="zh_CN">
        中文
      </Menu.Item>
      <Menu.Item key="en_US">
        英文
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="container">
      <Header />
      <div className="content">
        <Row>
          <Col offset={2} span={10}>
            <Dropdown trigger={['click']} overlay={menu}>
              <Button>{ i18n === 'zh_CN' ? '中文' : '英文' }</Button>
            </Dropdown>
          </Col>
          <Col span={12}>
            <p>{formatMessage({ id: 'App.username' })}</p>
            <p>{formatMessage({ id: 'App.password' })}</p>
            <div>
              <Pagination defaultCurrent={1} total={20} showSizeChanger />
              <Calendar fullscreen={false} />
            </div>
          </Col>
        </Row>
        <Button onClick={handleClick} icon="plus-circle">获取个人信息</Button>
        <UserList {...listProps} />
      </div>
    </div>
  );
};
App.propTypes = {
  app: PropTypes.object,
  loading: PropTypes.object,
  intl: PropTypes.func,
  dispatch: PropTypes.func,
};

export default connect(({ app, loading }) => ({ app, loading }))(injectIntl(App));
