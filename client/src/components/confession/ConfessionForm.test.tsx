import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import ConfessionForm from './ConfessionForm';
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get(`http://localhost:8080/api/confess`, (req, res, ctx) => {
    return res(
        ctx.json({"success":true,"justTalked":false,"message":"Confession received"}));
  })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Submit button becomes enabled when all input is filled in correctly', async () => {
    const user = userEvent.setup()
    render(<ConfessionForm />);        
    
    const subjectInput = screen.getByRole('textbox', { name: 'Subject' })
    await userEvent.type(subjectInput, 'My confession');
    
    const reasonSelect = screen.getByLabelText(/reason for contact/i, {selector: 'select'});
    fireEvent.change(reasonSelect, {target: {value: 'rudeness'}});    
    expect(screen.queryByText(/A reason must be selected/i)).not.toBeInTheDocument();    

    const detailsInput = screen.getByRole('textbox', { name: '' })
    await userEvent.type(detailsInput, 'I was mildly rude in public');
    
    const submitButton = screen.getByRole('button');
    expect(submitButton).not.toBeDisabled();
  });

  test('Submit button is disabled if subject is not filled in', async () => {
    const user = userEvent.setup()
    render(<ConfessionForm />);        
    
    const reasonSelect = screen.getByLabelText(/reason for contact/i, {selector: 'select'});
    fireEvent.change(reasonSelect, {target: {value: 'rudeness'}});    
    expect(screen.queryByText(/A reason must be selected/i)).not.toBeInTheDocument();    

    const detailsInput = screen.getByRole('textbox', { name: '' })
    await userEvent.type(detailsInput, 'I was mildly rude in public')

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();        
  });

  test('Submit button is disabled if a reason is not selected', async () => {
    const user = userEvent.setup()
    render(<ConfessionForm />);        
    
    const subjectInput = screen.getByRole('textbox', { name: 'Subject' })
    await userEvent.type(subjectInput, 'My confession');
    
    const detailsInput = screen.getByRole('textbox', { name: '' })
    await userEvent.type(detailsInput, 'I was mildly rude in public')   

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();        
  });

  test('Submit button is disabled if details are not filled in correctly', async () => {
    const user = userEvent.setup()
    render(<ConfessionForm />);        
    // we fire user events in child components
    const subjectInput = screen.getByRole('textbox', { name: 'Subject' })
    await userEvent.type(subjectInput, 'My confession');
    
    const reasonSelect = screen.getByLabelText(/reason for contact/i, {selector: 'select'});
    fireEvent.change(reasonSelect, {target: {value: 'rudeness'}});    
    expect(screen.queryByText(/A reason must be selected/i)).not.toBeInTheDocument();    

    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeDisabled();        
  });

test('renders appropriate text when confession is posted', async () => {
  const user = userEvent.setup()
  render(<ConfessionForm />);        
  
  const subjectInput = screen.getByRole('textbox', { name: 'Subject' })
  await userEvent.type(subjectInput, 'My confession');
  
  const reasonSelect = screen.getByLabelText(/reason for contact/i, {selector: 'select'});
  fireEvent.change(reasonSelect, {target: {value: 'rudeness'}});    
  expect(screen.queryByText(/A reason must be selected/i)).not.toBeInTheDocument();    

  const detailsInput = screen.getByRole('textbox', { name: '' })
  await userEvent.type(detailsInput, 'I was mildly rude in public');
  
  const submitButton = screen.getByRole('button');
  await userEvent.click(submitButton);

  expect(await screen.findByText(/Thanks for submitting your confession/i)).toBeInTheDocument();
});

test('renders appropriate text when user selects "I just want to talk"', async () => {
  const user = userEvent.setup()
  render(<ConfessionForm />);        
  
  const subjectInput = screen.getByRole('textbox', { name: 'Subject' })
  await userEvent.type(subjectInput, 'My confession');
  
  const reasonSelect = screen.getByLabelText(/reason for contact/i, {selector: 'select'});
  fireEvent.change(reasonSelect, {target: {value: 'just-talk'}});    
  expect(screen.queryByText(/A reason must be selected/i)).not.toBeInTheDocument();    

  const detailsInput = screen.getByRole('textbox', { name: '' })
  await userEvent.type(detailsInput, 'I was mildly rude in public');
  
  const submitButton = screen.getByRole('button');
  await userEvent.click(submitButton);

  expect(await screen.findByText(/Thanks for talking/i)).toBeInTheDocument();
});