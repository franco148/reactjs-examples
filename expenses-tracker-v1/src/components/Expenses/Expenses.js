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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterSelect={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
