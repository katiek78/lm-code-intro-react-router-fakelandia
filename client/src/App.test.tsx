import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('App renders and user can navigate', async () => {
   // render(<App />, {wrapper: BrowserRouter})
    render(<App />)
    const user = userEvent.setup()
  
    // default route
    console.log(screen.debug);
    expect(screen.getByText(/Home!/i)).toBeInTheDocument();    
})

