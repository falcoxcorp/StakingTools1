import React, { ErrorInfo, Component } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routes/routes'; 

// Simple Error Boundary without external dependencies
class AppErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
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
          <pre>{this.state.error?.message}</pre>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      )
    }

    return this.props.children
  }
}

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
    <AppErrorBoundary>
      <RouterProvider router={routers} />
    </AppErrorBoundary>
  )
}

export default App
