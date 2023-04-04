import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import ConfessionFormSubject from './ConfessionFormSubject';
import ConfessionForm from './ConfessionForm';

test('renders appropriate validation message when component is rendered and subject is not valid', () => {
    render(<ConfessionFormSubject validSubject={false} setValidSubject={jest.fn()} />);    
    expect(screen.getByText(/Subject is required/i)).toBeInTheDocument();    
  });

test('does not show validation message when component is rendered and subject is valid', () => {
    render(<ConfessionFormSubject validSubject={true} setValidSubject={jest.fn()} />);    
    expect(screen.queryByText(/Subject is required/i)).not.toBeInTheDocument();    
  });

test('does not show validation message when validSubject is set to false but user types 1 character in box', async () => {
    const user = userEvent.setup()
    render(<ConfessionFormSubject validSubject={false} setValidSubject={jest.fn()} />, {wrapper: ConfessionForm});    
    const subjectInput = screen.getByRole('textbox', { name: 'Subject' })
    await userEvent.type(subjectInput, 'B');    
    expect(screen.queryByText(/Subject is required/i)).not.toBeInTheDocument();    
  });
