import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const highestExpense = expenses.reduce((max, expense) => (expense.amount > max ? expense.amount : max), 0);
  const lowestExpense = expenses.reduce((min, expense) => (expense.amount < min ? expense.amount : min), expenses[0]?.amount || 0);

  const data = expenses.map((expense) => ({
    name: expense.title,
    value: expense.amount,
  }));

  return (
    <div className="expense-summary">
      <div className="summary-container">
        <div className="pie-chart-container">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="summary-details">
          <h2>Expense Summary</h2>
          <ul>
            <li><strong>Total Expenses:</strong> ${total.toFixed(2)}</li>
            <li><strong>Highest Expense:</strong> ${highestExpense.toFixed(2)}</li>
            <li><strong>Lowest Expense:</strong> ${lowestExpense.toFixed(2)}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
