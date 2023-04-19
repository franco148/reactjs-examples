import { useEffect, useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import axios from "axios";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 1, 20),
  },
  { id: "e2", title: "Hypermaxi", amount: 320.0, date: new Date(2023, 1, 14) },
  { id: "e3", title: "Farmacorp", amount: 164.0, date: new Date(2022, 11, 31) },
  { id: "e4", title: "Baby Corp", amount: 850.5, date: new Date(2022, 11, 21) },
  { id: "e5", title: "Farma Elias", amount: 60.7, date: new Date(2023, 1, 5) },
  { id: "e6", title: "Ic Norte", amount: 200.2, date: new Date(2023, 1, 12) },
  { id: "e7", title: "Ic Norte", amount: 200.2, date: new Date(2023, 6, 5) },
  { id: "e8", title: "Ic Norte", amount: 200.2, date: new Date(2023, 8, 11) },
  { id: "e9", title: "Ic Norte", amount: 200.2, date: new Date(2022, 8, 10) },
  { id: "e10", title: "Ic Norte", amount: 200.2, date: new Date(2022, 5, 20) },
];

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [rangeOfYears, setRangeOfYears] = useState([]);
  const [categories, setCategories] = useState([]);

  const addExpenseHandler = (expense) => {
    // console.log("In App.js", expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // import React from 'react';
  // return React.createElement('element', attributes, apenning and closing tags);
  // return React.createElement('div', {}, React.createElement('h2', {}, 'Lets get started'), React.createElement(Expenses, {items: expenses}));

  // const fetchRegisteredYears = () => {
  //   axios
  //     .get("http://localhost:8080/etracker/expenses/years")
  //     .then((response) => console.log(response));
  // };

  // useEffect(fetchRegisteredYears);

  const fetchInitialExprenseTrackerData = () => {
    const defaultSelectedYear = new Date().getFullYear().toString();
    const initialDateTime = new Date(2019, 0, 1).toISOString().split("T")[0];
    const endDateTime = new Date(2019, 11, 31).toISOString().split("T")[0];
    const groupBy = "NONE";

    axios
      .get(
        `http://localhost:8080/etracker/expenses?groupBy=${groupBy}&from=${initialDateTime}&to=${endDateTime}`
      )
      .then((response) => {
        console.log("Expenses from server: ", response);
        setExpenses((prevExpenses) => {
          return [...response.data];
        });
      });

    axios
      .get("http://localhost:8080/etracker/expenses/years")
      .then((response) => {
        const firstExpenseYear = Math.min(...response.data);
        const currentYear = new Date().getFullYear();
        const expenseYearsArray = [];
        expenseYearsArray.push(firstExpenseYear);

        for (let year = firstExpenseYear; year < currentYear; year++) {
          expenseYearsArray.push(year + 1);
        }
        console.log("years range: ", expenseYearsArray);

        setRangeOfYears((prevState) => {
          // return [...prevState, ...yearsList];
          return [...expenseYearsArray];
        });
      });

    axios.get("http://localhost:8080/etracker/categories").then((response) => {
      if (response && response.data) {
        console.log(response.data);
        setCategories(() => response.data);
        // setUserInput((prevState) => {
        //   return { ...prevState, selectedCategory: response.data[0].id };
        // });
      }
    });
  };

  useEffect(fetchInitialExprenseTrackerData, []);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} categories={categories} />
      <Expenses expenses={expenses} expenseYears={rangeOfYears} />
    </div>
  );
};

export default App;
