import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('App renders and user can navigate', async () => {
    render(<App />)    
  
    // default route
    console.log(screen.debug);
    expect(screen.getByText(/Home!/i)).toBeInTheDocument();    
})

