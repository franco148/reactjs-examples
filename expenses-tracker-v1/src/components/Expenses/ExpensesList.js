import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.expenseId}
            title={expense.expenseName}
            amount={expense.totalExpenses}
            date={expense.expenseDateTime}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
