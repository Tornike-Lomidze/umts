import React, { useState } from 'react';
// import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
// import type { RadioChangeEvent } from 'antd';
import { Col, Row, InputNumber, Input, Space, Radio, Button, Select, RadioChangeEvent } from 'antd';
import Table from './table';


const Header = () => {

  const [valueOne, setValueOne] = useState(1);
  const [valueTwo, setValueTwo] = useState(1);

    
  const onChangeOne = (e: RadioChangeEvent) => {
      console.log('onChangeOne ', e.target.valueOne);
      setValueOne(e.target.valueOne);
  };
  const onChangeTwo = (e: RadioChangeEvent) => {
    console.log('onChangeTwo ', e.target.valueTwo);
    setValueTwo(e.target.valueTwo);
};
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onChangPersonalNumber = (value: number) => {
    console.log('changed', value);
  };

  return (
    <>
      <header className='header'>
        <Row justify="space-between">
          <Col>
            <Col>
              <Radio.Group onChange={onChangeOne} value={valueOne} defaultValue={1}>
                  <Radio value={1} className="radio-btn">ფიზიკური პირი</Radio>
                  <Radio value={2} className="radio-btn">იურიდიული პირი</Radio>
                  <Radio value={3} className="radio-btn">არარეზიდენტი</Radio>
              </Radio.Group>
            </Col>
            <Col>
              <Radio.Group onChange={onChangeTwo} value={valueTwo} defaultValue={4}>
                  <Radio value={4} className="radio-btn">შიდა წყარო</Radio>
                  <Radio value={5} className="radio-btn">გარე წყარო</Radio>
              </Radio.Group>
            </Col>
          </Col>

          <Col>
            <Space direction="horizontal" style={{ width: '100%' }}>
                <InputNumber type="number" className="personalNumber" placeholder="პირადი ნომერი" min={1} onChange={onChangPersonalNumber}  />
                <Input placeholder="სახელი" />
                <Input placeholder="გვარი" />
                <Button type="primary">ძებნა</Button>
                <Select
                  defaultValue="2022-11-08 15:09:48"
                  style={{ width: 170 }}
                  onChange={handleChange}
                  options={[
                    { value: '2022-11-08 15:09:48', label: '2022-11-08 15:09:48' },
                    { value: '2022-08-08 18:03:25', label: '2022-08-08 18:03:25' },
                    { value: '2022-06-08 17:55:24', label: '2022-06-08 17:55:24' },
                    { value: '2022-01-08 11:29:37', label: '2022-01-08 11:29:37', disabled: true },
                  ]}
                />
            </Space>
          </Col> 
        </Row>
        
      </header>
      <Table />
    </>
  )
}

export default Header