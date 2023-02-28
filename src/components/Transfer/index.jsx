import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    january?: number | String;
    february?: number | String;
    march?: number | String;
    april?: number | String;
    may?: number | String;
    june?: number | String;
    july?: number | String;
    august?: number | String;
    september?: number | String;
    october?: number | String;
    november?: number | String;
    december?: number | String;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'იანვარი',
      dataIndex: 'january',
    },
    {
      title: 'თებერვალი',
      dataIndex: 'february',
    },
    {
      title: 'მარტი',
      dataIndex: 'march',
    },
    {
      title: 'აპრილი',
      dataIndex: 'april',
    },
    {
      title: 'მაისი',
      dataIndex: 'may',
    },
    {
      title: 'ივნისი',
      dataIndex: 'june',
    },
    {
      title: 'ივლისი',
      dataIndex: 'july',
    },
    {
      title: 'აგვისტო',
      dataIndex: 'august',
    },
    {
      title: 'სექტემბერი',
      dataIndex: 'september',
    },
    {
      title: 'ოქტომბერი',
      dataIndex: 'october',
    },
    {
      title: 'ნოემბერი',
      dataIndex: 'november',
    },{
      title: 'დეკემბერი',
      dataIndex: 'december',
    }
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      january: 2500,
      february: 5500,
      march: 3550,
      april: 1100,
      may: 3200,
      june: '*',
      july: '*',
      august: 2500,
      september: 1400,
      october: 3500,
      november: 3500,
      december: 5030
    }
  ];
  

  const Transfer = () => {
    return(
      <section className="section-table"> 
        <h3 className="transfer-title">ფულადი გზავნილები (ლარში) თვეების მიხედვით</h3>
        <Table columns={columns} dataSource={data} size="middle" pagination={false} />
      </section>
    )
  };
  
  export default Transfer;

