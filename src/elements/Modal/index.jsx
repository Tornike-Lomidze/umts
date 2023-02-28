import React, { useState } from 'react';
import { InputNumber, Button, Modal as ModalE } from 'antd';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [perNum, setPerNum] = useState();

  const showModal = () => {
    setIsModalOpen(true);
  };

  
  const onChangePersonalNumber = (e) => {
    setPerNum(e.target.value);
    console.log('changed', perNum);
  };
  
  const handleCancel = () => {

    setPerNum(null);

    setIsModalOpen(false);
  };
  
  
  const handleOk = () => {
    console.log(perNum);

    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <ModalE title="გთხოვთ განმეორებით შეიყვანოთ პირადი ნომერი" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* <InputNumber type="number" size="large" className="inp inp-num" placeholder="პირადი ნომერი" min={1} onChange={onChangePersonalNumber} /> */}

        <input type="number" className="inp inp-num" placeholder="პირადი ნომერი" min={1} onChange={onChangePersonalNumber} />
     
      </ModalE>
    </>
  );
};

export default Modal;