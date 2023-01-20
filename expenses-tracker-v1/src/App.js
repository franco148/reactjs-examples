import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 1, 20) },
    { id: 'e2', title: 'Hypermaxi', amount: 320.00, date: new Date(2023, 1, 14) },
    { id: 'e3', title: 'Farmacorp', amount: 164.00, date: new Date(2022, 12, 31) },
    { id: 'e4', title: 'Baby Corp', amount: 850.50, date: new Date(2022, 12, 21) },
    { id: 'e5', title: 'Farma Elias', amount: 60.70, date: new Date(2023, 1, 5) },
    { id: 'e6', title: 'Ic Norte', amount: 200.20, date: new Date(2023, 1, 12) }
  ];

  return (
    <div>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
    </div>
  );
}

export default App;
