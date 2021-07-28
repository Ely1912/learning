import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props)=>{
    const [addNewExpense, setAddNewExpense] = useState (false);
    const saveExpenseDataHandler= (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setAddNewExpense(false);
    };

    const addNewExpenseHandler = () =>{
      setAddNewExpense(true);
    };

    const cancelHandler = ()=>{
        setAddNewExpense(false);
    }


return <div className='new-expense'>

    {!addNewExpense && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
    {addNewExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelHandler={cancelHandler} />
}
</div>
};

export default NewExpense;