import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpensesList";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

import axios from "axios";
// import moment from

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
    const initialDateTime = new Date(value, 0, 1).toISOString().split("T")[0];
    const endDateTime = new Date(value, 11, 31).toISOString().split("T")[0];
    const groupBy = "MONTHLY";

    console.log("Sending parameters: ", initialDateTime);
    axios
      .get(
        `http://localhost:8080/etracker/expenses?groupBy=${groupBy}&from=${initialDateTime}&to=${endDateTime}`
      )
      .then((response) => {
        console.log("Expenses from server: ", response);
      });
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
