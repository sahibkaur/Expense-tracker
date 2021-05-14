import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [expenses, setExpenses] = useState(props.items);
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        setExpenses(props.items.filter(expense => expense.date.getFullYear().toString()===selectedYear));
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>        
                {expenses.map((expense) => (
                    <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                    />
                ))}        
            </Card>
        </div>
        
    );
}

export default Expenses;