import React, { ErrorInfo, Component } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routes/routes'; 

console.log('📱 App component loading...')

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
    console.error('🚨 App Error Boundary caught:', error)
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🔍 App Error Details:', error, errorInfo)
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
          backgroundColor: '#f5f5f5',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h2>Application Error</h2>
          <pre style={{ 
            fontSize: '14px', 
            maxWidth: '80%', 
            overflow: 'auto',
            backgroundColor: '#fff',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}>
            {this.state.error?.message || 'Unknown error'}
          </pre>
          <details style={{ marginTop: '20px', textAlign: 'left' }}>
            <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>Stack Trace</summary>
            <pre style={{ 
              fontSize: '12px', 
              overflow: 'auto',
              backgroundColor: '#f8f8f8',
              padding: '10px',
              borderRadius: '4px'
            }}>
              {this.state.error?.stack}
            </pre>
          </details>
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
            Reload Application
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
    console.log('🛣️ Setting up router...')
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
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: 'red' }}>App Render Error</h2>
        <p>{error instanceof Error ? error.message : 'Unknown error'}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reload
        </button>
      </div>
    )
  }
}

export default App