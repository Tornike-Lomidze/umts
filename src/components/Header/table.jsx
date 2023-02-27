import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    personalNumber: string;
    userName: string;
    lastName: string;
}

const columns: ColumnsType<DataType> = [
    {
      title: 'პირადი ნომერი',
      dataIndex: 'personalNumber',
    },
    {
      title: 'სახელი',
      dataIndex: 'userName',
    },
    {
      title: 'გვარი',
      dataIndex: 'lastName',
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      personalNumber: '40001007578',
      userName: 'ლევან',
      lastName: 'მოლაშვილი',
    }
  ];
  
  const TableC: React.FC = () => (
    <section className="section-table"> 
     <Table columns={columns} dataSource={data} size="middle" pagination={false} />
    </section>
  );
  
  export default TableC;

