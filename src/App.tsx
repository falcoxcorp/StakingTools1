import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routes/routes'; 

function AppErrorFallback({error}: {error: Error}) {
  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      color: 'red',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <h2>App Error:</h2>
      <pre>{error.message}</pre>
      <button onClick={() => window.location.reload()}>Reload Page</button>
    </div>
  )
}
function App() {

  return (
    <ErrorBoundary FallbackComponent={AppErrorFallback}>
      <RouterProvider router={routers} />
    </ErrorBoundary>
  )
}

export default App
