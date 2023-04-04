import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/error/ErrorFallback'
import Router from './components/Router'

function App() {

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HashRouter>
        <Router />        
      </HashRouter>
    </ErrorBoundary>
  )
}

export default App;
