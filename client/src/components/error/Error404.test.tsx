import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Error404 from './Error404';

test('renders appropriate text when component is rendered', () => {
    render(<Error404 />);    
    expect(screen.getByText(/404 - Not found!/i)).toBeInTheDocument();    
  });