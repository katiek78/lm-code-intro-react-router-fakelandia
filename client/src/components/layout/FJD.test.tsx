import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FJD from './FJD';

test('renders appropriate text when component is rendered', () => {
    render(<FJD />);    
    expect(screen.getByText(/Fakelandia Justice Department/i)).toBeInTheDocument();    
  });