import React from 'react';
import { Card as CardE } from 'antd';

const CardBorrower = (props) => {

  return (
    <CardE title={props?.title} bordered={false} className="card-style">
        <p>სახელი: <strong>{props?.user}</strong></p>
        <p>პირად ნომერი: <strong>{props?.personalNumber}</strong></p>
        <p>მოქალაქეობა: <strong>{props?.country}</strong></p>
    </CardE>
    )
}

export default CardBorrower;

