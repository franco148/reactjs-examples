import axios from "axios";
import { useEffect, useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
    selectedCategory: "",
  });

  // const [categories, setCategories] = useState([]);

  // const fetchCategories = () => {
  //   axios.get("http://localhost:8080/etracker/categories").then((response) => {
  //     if (response && response.data) {
  //       console.log(response.data);
  //       setCategories(() => response.data);
  //       setUserInput((prevState) => {
  //         return { ...prevState, selectedCategory: response.data[0].id };
  //       });
  //     }
  //   });
  // };

  // useEffect(fetchCategories, []);

  const titleChangeHandler = (event) => {
    // console.log("Title changed!" + event.target.value);
    // setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const categoryChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, selectedCategory: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
      category: +userInput.selectedCategory,
    };

    // console.log("submitted!", expenseData);

    props.onSaveExpenseData(expenseData);

    setUserInput((prevState) => {
      return {
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
        selectedCategory: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Category</label>
          <select
            value={userInput.selectedCategory}
            onChange={categoryChangeHandler}
          >
            {props.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
