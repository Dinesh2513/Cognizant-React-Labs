import { useState } from 'react';
import EmployeesList from './EmployeesList';
import ThemeContext from './ThemeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const employees = [
    {
      id: 1,
      name: 'Dinesh',
      designation: 'React Developer',
      department: 'Frontend'
    },
    {
      id: 2,
      name: 'Rahul',
      designation: 'Java Developer',
      department: 'Backend'
    },
    {
      id: 3,
      name: 'Priya',
      designation: 'UI Designer',
      department: 'Design'
    }
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <div className="app">
        <h1>Employee Management App</h1>

        <button onClick={() => setTheme('light')}>
          Light Theme
        </button>

        <button onClick={() => setTheme('dark')}>
          Dark Theme
        </button>

        <EmployeesList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;