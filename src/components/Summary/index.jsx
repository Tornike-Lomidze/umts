import React from 'react';
import { Space } from 'antd';
import Card from '../../elements/Card';
import CardBorrower from '../../elements/CardBorrower';


const Summary = () => {


  return (
    <section className='umts-section sec-card-grid'>
      <CardBorrower
        title="მსესხებელი"
        user="ელზა ბასილაძე" 
        personalNumber="61004047803"
        country="საქართველო"
      />
      <Card
        title="გადმომრიცხავი ქვეყნის რაოდენობა" 
        dataItem="10" 
        justifyPosition="center" 
        alignPosition="center"
      />
      <Card 
        title="გზავნილების ჯამური რაოდენობა (ბოლო 1 წელში)" 
        dataItem="15" 
        justifyPosition="center"
        alignPosition="center"
      />
      <Card 
        title="განაღდებული გზვნილების ჯამი (ბოლო 1 წელში)" 
        dataItem="127 430 GEL" 
        justifyPosition="center"
        alignPosition="center"
      />
    </section>
  )
}

export default Summary

