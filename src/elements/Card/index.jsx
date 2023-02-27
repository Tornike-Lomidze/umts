import React from 'react';
import { Row, Card as CardE } from 'antd';

const Card = (props) => {

  return (
    <CardE title={props?.title} bordered={false} className="card-style">
        <Row justify={props?.justifyPosition} align={props?.alignPosition}>
            <h3>{props?.dataItem}</h3>
        </Row>
    </CardE>
    )
}

export default Card;

