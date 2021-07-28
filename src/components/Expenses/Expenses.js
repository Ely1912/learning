import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear]= useState('2020');

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  const filteredItems = props.items.filter(expense=> {return expense.date.getFullYear().toString()===filteredYear});

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
      {
        filteredItems.map((item)=>
        <ExpenseItem
        key= {item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
        )
      }
      
    </Card>
    </div>
  );
}

export default Expenses;