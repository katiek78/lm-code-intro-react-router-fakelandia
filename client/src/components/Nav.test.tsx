import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';

test('renders appropriate links when component is rendered', () => {
    render(<Nav />, { wrapper: BrowserRouter });    
    expect(screen.getByText(/Home/i)).toBeInTheDocument();    
    expect(screen.getByText(/Misdemeanours/i)).toBeInTheDocument();    
    expect(screen.getByText(/Confess To Us/i)).toBeInTheDocument();    
  });