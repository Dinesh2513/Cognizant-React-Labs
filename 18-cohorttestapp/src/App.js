import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Cohort Details</h1>
      <CohortDetails cohort={CohortData[0]} />
    </div>
  );
}

export default App;