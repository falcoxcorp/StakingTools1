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
    console.error('App Error Boundary caught:', error)
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App Error Details:', error, errorInfo)
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
          <pre style={{ fontSize: '14px', maxWidth: '80%', overflow: 'auto' }}>
            {this.state.error?.message || 'Unknown error'}
          </pre>
          <button 
            onClick={() => {
              this.setState({ hasError: false, error: undefined })
              window.location.reload()
            }}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  console.log('🚀 App component rendering...')
  
  try {
    return (
      <AppErrorBoundary>
        <RouterProvider router={routers} />
      </AppErrorBoundary>
    )
  } catch (error) {
    console.error('❌ App render error:', error)
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
        padding: '20px'
      }}>
        <h2 style={{ color: 'red' }}>App Render Error</h2>
        <p>{error instanceof Error ? error.message : 'Unknown error'}</p>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    )
  }
}

export default App