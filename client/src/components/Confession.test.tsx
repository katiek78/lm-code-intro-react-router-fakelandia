import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Confession from './Confession';

test('renders appropriate text when component is rendered', () => {
    render(<Confession />);    
    expect(screen.getByText(/Confession time!/i)).toBeInTheDocument();    
  });