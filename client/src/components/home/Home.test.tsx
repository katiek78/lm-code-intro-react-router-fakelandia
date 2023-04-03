import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

test('renders appropriate text when component is rendered', () => {
    render(<Home />);    
    expect(screen.getByText(/Welcome to the home of the Justice Department of Fakelandia./i)).toBeInTheDocument();    
  });