import React, { ErrorInfo, Component } from 'react';
import { ChildrenProps } from '../common/types/common';
import { I18Provider } from './I18Context';
import DateProvider from './DateProvider';
import { AppProvider } from './AppProvider';
import SettingsProvider from './SettingsProvider';
import Web3Provider from './block_chain/Web3Provider';

// Simple Error Boundary without external dependencies
class MainErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    console.error('MainProvider Error Boundary caught:', error)
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('MainProvider Error Details:', error, errorInfo)
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
          <h2>Provider Error:</h2>
          <pre style={{ fontSize: '14px', maxWidth: '80%', overflow: 'auto' }}>
            {this.state.error?.message || 'Unknown provider error'}
          </pre>
          <details style={{ marginTop: '20px', textAlign: 'left' }}>
            <summary>Stack Trace</summary>
            <pre style={{ fontSize: '12px', overflow: 'auto' }}>
              {this.state.error?.stack}
            </pre>
          </details>
          <button 
            onClick={() => window.location.reload()}
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

const MainProvider = ({ children }: ChildrenProps) => {
  console.log('🔧 MainProvider initializing...')
  
  try {
    return (
      <MainErrorBoundary>
        <Web3Provider>
          <SettingsProvider>
            <I18Provider>
              <DateProvider>
                <AppProvider>{children}</AppProvider>
              </DateProvider>
            </I18Provider>
          </SettingsProvider>
        </Web3Provider>
      </MainErrorBoundary>
    );
  } catch (error) {
    console.error('❌ MainProvider error:', error)
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
        <h2 style={{ color: 'red' }}>Provider Error</h2>
        <p>{error instanceof Error ? error.message : 'Unknown provider error'}</p>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    )
  }
};

export default MainProvider