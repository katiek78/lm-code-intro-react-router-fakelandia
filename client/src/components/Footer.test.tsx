import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

test('renders appropriate text when component is rendered', () => {
    render(<Footer />);    
    expect(screen.getByText(/Katie Kermode © 2023/i)).toBeInTheDocument();    
  });