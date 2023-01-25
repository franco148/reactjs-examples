import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 1, 20),
  },
  {
    id: "e2",
    title: "Hypermaxi",
    amount: 320.0,
    date: new Date(2023, 1, 14),
  },
  {
    id: "e3",
    title: "Farmacorp",
    amount: 164.0,
    date: new Date(2022, 12, 31),
  },
  {
    id: "e4",
    title: "Baby Corp",
    amount: 850.5,
    date: new Date(2022, 12, 21),
  },
  {
    id: "e5",
    title: "Farma Elias",
    amount: 60.7,
    date: new Date(2023, 1, 5),
  },
  { id: "e6", title: "Ic Norte", amount: 200.2, date: new Date(2023, 1, 12) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log("In App.js", expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // import React from 'react';
  // return React.createElement('element', attributes, apenning and closing tags);
  // return React.createElement('div', {}, React.createElement('h2', {}, 'Lets get started'), React.createElement(Expenses, {items: expenses}));

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
