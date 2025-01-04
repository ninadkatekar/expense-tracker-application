import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id} className="expense-item">
          <div>
            <h3>{expense.title}</h3>
            <p>${expense.amount.toFixed(2)} - {expense.date.toDateString()}</p>
          </div>
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;