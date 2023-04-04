import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import ConfessionFormReason from './ConfessionFormReason';
import ConfessionForm from './ConfessionForm';

test('renders appropriate validation message when component is rendered and a reason is not selected', () => {
    render(<ConfessionFormReason validReason={false} setValidReason={jest.fn()} />);    
    expect(screen.getByText(/A reason must be selected/i)).toBeInTheDocument();    
  });

test('does not show validation message when component is rendered and a reason is selected', () => {
    render(<ConfessionFormReason validReason={true} setValidReason={jest.fn()} />);    
    expect(screen.queryByText(/A reason must be selected/i)).not.toBeInTheDocument();    
  });

test('does not show validation message when validReason is set to false but user selects a reason', async () => {
    const user = userEvent.setup()
    render(<ConfessionFormReason validReason={false} setValidReason={jest.fn()} />, {wrapper: ConfessionForm});    
    const reasonSelect = screen.getByLabelText(/reason for contact/i, {selector: 'select'});
    fireEvent.change(reasonSelect, {target: {value: 'rudeness'}});    
    expect(screen.queryByText(/A reason must be selected/i)).not.toBeInTheDocument();    
  });
