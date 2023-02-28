import React, { useState } from 'react';
import { Col, Row, Form, InputNumber, Input,  Radio, Button, Select } from 'antd';
import Table from './table';

const Header = () => {

  const [form] = Form.useForm();
  const [valueOne, setValueOne] = useState("physicalPerson");
  const [valueTwo, setValueTwo] = useState("internalSource");

    
  const onChangeOne = (value) => {
      console.log('onChangeOne ', value);
      setValueOne(value.target.value);
  };
  const onChangeTwo = (value) => {
    console.log('onChangeTwo ', value);
    setValueTwo(value.target.value);
};
  const onChangeDateTime = (value) => {
    console.log(`selected ${value}`);
  };
  const onChangePersonalNumber = (value) => {
    console.log('changed', value);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <header className='header'>
        <Form
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          className="header-form"
        >
          <Col>
            <Col>
              <Form.Item name="userPersonStatus">
                <Radio.Group onChange={onChangeOne} value={valueOne} defaultValue="physicalPerson">
                    <Radio value="physicalPerson" className="radio-btn">ფიზიკური პირი</Radio>
                    <Radio value="LegalEntity" className="radio-btn">იურიდიული პირი</Radio>
                    <Radio value="Non-resident" className="radio-btn">არარეზიდენტი</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="userSource">
                <Radio.Group onChange={onChangeTwo} value={valueTwo} defaultValue="internalSource">
                    <Radio value="internalSource" className="radio-btn">შიდა წყარო</Radio>
                    <Radio value="externalSource" className="radio-btn">გარე წყარო</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Col>

          <Col>
            <Row>
                <Form.Item name="personalNumber">
                  <InputNumber type="number" size="large" className="inp inp-num" placeholder="პირადი ნომერი" min={1} onChange={onChangePersonalNumber}  />
                </Form.Item>
                <Form.Item name="name">
                  <Input placeholder="სახელი" size="large" className="inp inp-text"   />
                </Form.Item>
                <Form.Item name="surname">
                  <Input placeholder="გვარი" size="large" className="inp inp-text"  />
                </Form.Item>
                <Form.Item name="surname">
                  <Button htmlType="submit" size="large" className="btn-form">ძებნა</Button>
                </Form.Item>
                <Form.Item name="selectDateTime">
                  <Select
                    defaultValue=""
                    style={{ width: 200 }}
                    onChange={onChangeDateTime}
                    options={[
                      { value: '2022-11-08 15:09:48', label: '2022-11-08 15:09:48' },
                      { value: '2022-08-08 18:03:25', label: '2022-08-08 18:03:25' },
                      { value: '2022-06-08 17:55:24', label: '2022-06-08 17:55:24' },
                      { value: '2022-01-08 11:29:37', label: '2022-01-08 11:29:37', disabled: true },
                    ]}
                    size="large"
                    className="select-form"
                  />
                </Form.Item>
            </Row>
          </Col>
        </Form> 
        <Row justify="space-between" align="center">
          <Col>
            <span className='header-sms error'>CEI/სისტემის ადმინისტრატორი</span>
          </Col>
          <Col>
            <span className='header-sms'>CEI/სისტემის ადმინისტრატორი</span>
          </Col>
        </Row>
      </header>
    
    
      <Table className='umts-section' />
    </>
  )
}

export default Header