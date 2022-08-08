
//Rendering a form to enter expense data
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, {useState} from 'react';



const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    console.log(isEditing);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
 

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
        {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>

}

export default NewExpense;