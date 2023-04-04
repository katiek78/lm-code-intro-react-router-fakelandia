import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/error/ErrorFallback'

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
)
