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
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Provider Error:', error, errorInfo)
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
          <pre>{this.state.error?.message}</pre>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      )
    }

    return this.props.children
  }
}

function ErrorFallback({error}: {error: Error}) {
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
      <pre>{error.message}</pre>
      <details style={{ marginTop: '20px', textAlign: 'left' }}>
        <summary>Stack Trace</summary>
        <pre style={{ fontSize: '12px', overflow: 'auto' }}>{error.stack}</pre>
      </details>
    </div>
  )
}

const MainProvider = ({ children }: ChildrenProps) => {
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
};

export default MainProvider
