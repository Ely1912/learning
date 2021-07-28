import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear]= useState('2020');

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  const filteredItems = props.items.filter(expense=> {return expense.date.getFullYear().toString()===filteredYear});
  


  return (
    <li>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
    <ExpensesList items={filteredItems}/>
    </Card>
    </li>
  );
}

export default Expenses;

  // {filteredItems.length === 0 && <p>No expenses found </p>}
    // {filteredItems.length > 0 && 
    //filteredItems.map((item)=>
    //    <ExpenseItem
    //    key= {item.id}
    //    title={item.title}
    //    amount={item.amount}
    //    date={item.date}
    //  />)}