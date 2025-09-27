import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routes/routes'; 

function ErrorFallback({error}: {error: Error}) {
  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  )
}

function LoadingFallback() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '18px'
    }}>
      Loading...
    </div>
  )
}

function App() {

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        <RouterProvider router={routers} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
