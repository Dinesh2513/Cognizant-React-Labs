import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

describe('Cohort Details Component', () => {
  test('should create the component', () => {
    render(<CohortDetails cohort={CohortData[0]} />);
    const cohortCode = screen.getByText(CohortData[0].code);
    expect(cohortCode).toBeInTheDocument();
  });

  test('should initialize the props', () => {
    const cohort = CohortData[0];
    render(<CohortDetails cohort={cohort} />);
    expect(screen.getByText(cohort.name)).toBeInTheDocument();
    expect(screen.getByText(cohort.status)).toBeInTheDocument();
  });

  test('should display cohort code in h3', () => {
    render(<CohortDetails cohort={CohortData[0]} />);
    const h3Element = screen.getByRole('heading', { level: 3 });
    expect(h3Element).toHaveTextContent(CohortData[0].code);
  });

  test('should always render same html', () => {
    const tree = renderer
      .create(<CohortDetails cohort={CohortData[0]} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});