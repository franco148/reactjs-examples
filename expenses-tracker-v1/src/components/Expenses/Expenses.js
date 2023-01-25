import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  // const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (value) => {
    setFilteredYear(value);
    // setFilteredExpenses(() => {
    //   return props.expenses.filter(
    //     (expense) => expense.date.getFullYear() == value
    //   );
    // });
  };

  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterSelect={filterChangeHandler}
      />
      {
        // here we can have a ternary expresion in order to show information when there is no expenses for
        // a selected year
        // filteredExpenses.map((expense) => {
        //   return (
        //     <ExpenseItem
        //       key={expense.id}
        //       title={expense.title}
        //       amount={expense.amount}
        //       date={expense.date}
        //     />
        //   );
        // })

        expensesContent
      }
    </Card>
  );
}

export default Expenses;
