import axios from "axios";
import { useEffect, useState } from "react";
import "./ExpenseFilter.css";

// const DEFAULT_RANGE_OF_YEARS = [];

const ExpenseFilter = (props) => {
  // const [rangeOfYears, setRangeOfYears] = useState([props.selected]);

  const filterChangeHandler = (event) => {
    // console.log(event.target.value);
    props.onFilterSelect(event.target.value);
  };

  // const fetchRegisteredYears = () => {
  //   axios
  //     .get("http://localhost:8080/etracker/expenses/years")
  //     .then((yearsList) => {
  //       console.log("years range: ", yearsList);
  //       setRangeOfYears((prevState) => {
  //         return [...prevState, ...yearsList];
  //       });
  //     });
  // };

  // useEffect(fetchRegisteredYears, []);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          {
            /* <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option> */
            props.expenseYears.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })
          }
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
