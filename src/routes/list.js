import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const List = ({ dataSource, loading }) => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'userName',
      key: 'userName',
      align: 'center',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      align: 'center',
      render: (d) => { return d === 1 ? '男' : '女'; },
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      key: 'birthday',
      align: 'center',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      align: 'center',
    },
  ];
  return (
    <Table
      columns={columns}
      loading={loading}
      dataSource={dataSource}
      size="default"
      rowKey={record => record.id}
    />
  );
};

List.propTypes = {
  loading: PropTypes.bool,
  dataSource: PropTypes.array,
};

export default List;
