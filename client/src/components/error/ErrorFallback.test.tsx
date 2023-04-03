import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorFallback } from './ErrorFallback';

test('renders appropriate text when component is rendered', () => {
    render(<ErrorFallback />);    
    expect(screen.getByText(/Something went wrong.../i)).toBeInTheDocument();    
  });