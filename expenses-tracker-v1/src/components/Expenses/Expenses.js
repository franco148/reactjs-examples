import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpensesList";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );
  // const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const filteredExpenses = props.expenses.filter((expense) => {
    // console.log("Filtered year", filteredYear);
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (value) => {
    setFilteredYear(value);
    // setFilteredExpenses(() => {
    //   return props.expenses.filter(
    //     (expense) => expense.date.getFullYear() == value
    //   );
    // });
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        expenseYears={props.expenseYears}
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
        // expensesContent
      }
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
