import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    sendingCountry: string;
    dateOfDispatch: Date;
    cashOutDate: string;
    currency: string;
    money: number | string;
    cashingCompany: string;
    dateOfLastUpdate: Date;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: '#',
      dataIndex: 'key',
    },
    {
      title: 'გამომგზავნი ქვეყანა',
      dataIndex: 'sendingCountry',
    },
    {
      title: 'გამოგზავნის თარიღი',
      dataIndex: 'dateOfDispatch',
    },
    {
      title: 'განაღდების თარიღი',
      dataIndex: 'cashOutDate',
    },
    {
      title: 'ვალუტა',
      dataIndex: 'currency',
    },
    {
      title: 'თანხა',
      dataIndex: 'money',
    },
    {
      title: 'განაღდების კომპანია',
      dataIndex: 'cashingCompany',
    },
    {
      title: 'ბოლო განახლების თარიღი',
      dataIndex: 'dateOfLastUpdate',
    },
  ];
  
  const data: DataType[] = [
    {
        key: '1',
        sendingCountry: 'აშშ',
        dateOfDispatch: '01.01.12.2020',
        cashOutDate: '01.01.12.2020',
        currency: 'USD',
        money: 1500,
        cashingCompany: 'საქართველოს ბანკი',
        dateOfLastUpdate:  '01.01.12.2020'
    },
    {
        key: '2',
        sendingCountry: 'იტალია',
        dateOfDispatch: '01.01.12.2020',
        cashOutDate: '01.01.12.2020',
        currency: 'EUR',
        money: 1500,
        cashingCompany: 'საქართველოს ბანკი',
        dateOfLastUpdate:  '01.01.12.2020'
    },
    {
        key: '3',
        sendingCountry: 'ესპანეთი',
        dateOfDispatch: '01.01.12.2020',
        cashOutDate: '01.01.12.2020',
        currency: 'EUR',
        money: 1500,
        cashingCompany: 'საქართველოს ბანკი',
        dateOfLastUpdate:  '01.01.12.2020'
    },
    {
        key: '4',
        sendingCountry: 'აშშ',
        dateOfDispatch: '01.01.12.2020',
        cashOutDate: '01.01.12.2020',
        currency: 'USD',
        money: 1500,
        cashingCompany: 'საქართველოს ბანკი',
        dateOfLastUpdate:  '01.01.12.2020'
    },
  ];
  

  const TransferHistory: React.FC = () => (
    <section className="section-table"> 
     <Table columns={columns} dataSource={data} size="middle" pagination={false} />
    </section>
  );
  
  export default TransferHistory;
