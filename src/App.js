import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <h1>Let's get started</h1>
      <p>This is also visible</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
