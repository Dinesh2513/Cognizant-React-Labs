import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div className="card">
      <h2>{employee.name}</h2>
      <p><b>Designation:</b> {employee.designation}</p>
      <p><b>Department:</b> {employee.department}</p>

      <button className={theme}>
        View Details
      </button>
    </div>
  );
}

export default EmployeeCard;