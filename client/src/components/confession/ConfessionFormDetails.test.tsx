import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import ConfessionFormDetails from './ConfessionFormDetails';
import ConfessionForm from './ConfessionForm';

test('renders appropriate validation message when component is rendered and details are not valid', () => {
    render(<ConfessionFormDetails validDetails={false} setValidDetails={jest.fn()} />);    
    expect(screen.getByText(/Details should be at least 15 characters/i)).toBeInTheDocument();    
  });

test('does not show validation message when component is rendered and details are valid', () => {
    render(<ConfessionFormDetails validDetails={true} setValidDetails={jest.fn()} />);    
    expect(screen.queryByText(/Details should be at least 15 characters/i)).not.toBeInTheDocument();    
  });

test('does not show validation message when validDetails is set to false but user types 15 characters in box', async () => {
    const user = userEvent.setup()
    render(<ConfessionFormDetails validDetails={false} setValidDetails={jest.fn()} />, {wrapper: ConfessionForm});    
    const detailsInput = screen.getByRole('textbox', { name: '' })
    await userEvent.type(detailsInput, 'I was mildly rude in public');    
    expect(screen.queryByText(/Details should be at least 15 characters/i)).not.toBeInTheDocument();    
  });

  test('shows validation message when validDetails is set to false and user types fewer than 15 characters in box', async () => {
    const user = userEvent.setup()
    render(<ConfessionFormDetails validDetails={false} setValidDetails={jest.fn()} />, {wrapper: ConfessionForm});    
    const detailsInput = screen.getByRole('textbox', { name: '' })
    await userEvent.type(detailsInput, 'I was rude');    
    expect(screen.queryByText(/Details should be at least 15 characters/i)).toBeInTheDocument();    
  });

