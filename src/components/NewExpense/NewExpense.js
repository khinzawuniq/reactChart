import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {

    const [isEditing,SetisEditing] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        SetisEditing(false);
    };
    const onclickHandler = () => {
        SetisEditing(true);
    }

    const stopEditingHandler = () =>{
        SetisEditing(false);
    }

    return <div className='new-expense'>
        {!isEditing &&<button onClick={onclickHandler}>Add New Expense</button>}
        {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler} />}
    </div>
};

export default NewExpense;