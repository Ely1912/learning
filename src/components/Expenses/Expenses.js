import React from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <div className="expenses">
     {props.items.map((item, i)=>
     <ExpenseItem
     title={item.title}
     amount={item.amount}
    date={item.date}
   />
     )}
    </div>
  );
}

export default Expenses;

// for (var i=0; i<3 ; i++ ){
//  <ExpenseItem
  //title={props.items[0].title}
  //amount={props.items[0].amount}
  //date={props.items[0].date}
///>
//}