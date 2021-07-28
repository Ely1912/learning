import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props)=>{
    const [addNewExpense, setAddNewExpense] = useState (true);
    const saveExpenseDataHandler= (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setAddNewExpense(true);
    };

    const addNewExpenseHandler = () =>{
      setAddNewExpense(null);
    };

    const cancelHandler = ()=>{
        setAddNewExpense(true);
    }


return <div className='new-expense'>

    {addNewExpense===!null ? <button onClick={addNewExpenseHandler}>Add New Expense</button> :
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelHandler={cancelHandler} />
}
</div>
};

export default NewExpense;