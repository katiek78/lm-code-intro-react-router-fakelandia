import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Confession from './Confession';

test('renders appropriate text when component is rendered', () => {
    render(<Confession />);    
    expect(screen.getByText(/It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly./i)).toBeInTheDocument();    
  });