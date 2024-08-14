import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table'; 
import { IUser } from '../../type/user.type'; interface DataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Define Props with the expected data type
interface Props { 
  data: DataType[]; // Ensure this matches the data structure
}

// Define columns for the Ant Design Table
const columns: ColumnsType<DataType> = [
  {
    title: 'UserId',
    dataIndex: 'userId',
    key: 'userId',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
];

const ListUser: React.FC<Props> = ({ data }) => { 
  return (
    <Table 
      columns={columns} 
      dataSource={data} 
      rowKey="id" 
    />
  );
};

export default ListUser;
