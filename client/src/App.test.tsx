import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('App renders and user can navigate', async () => {
    render(<App />);
    const user = userEvent.setup();
  
    // default route
    console.log(screen.debug);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();    

    // Misdemeanours route
    await user.click(screen.getByText(/Misdemeanours/i, { selector: 'a'}))
    await waitFor(() => expect(screen.getByText(/Citizen ID/i)).toBeInTheDocument());

    // Confessions route
    await user.click(screen.getByText(/Confess To Us/i, { selector: 'a'}))
    expect(screen.getByText(/Confession time!/i)).toBeInTheDocument()

    // Home route
    await user.click(screen.getByText(/Home/i, { selector: 'a'}))
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument()

});

test('landing on a bad page', () => {
    const badRoute = '/some/bad/route'
      
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,    
    )
    expect(screen.getByText(/Something went wrong.../i)).toBeInTheDocument();
});

