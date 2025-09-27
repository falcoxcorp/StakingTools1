import { ErrorBoundary } from 'react-error-boundary';
import { ChildrenProps } from '../common/types/common';
import { I18Provider } from './I18Context';
import DateProvider from './DateProvider';
import { AppProvider } from './AppProvider';
import SettingsProvider from './SettingsProvider';
import Web3Provider from './block_chain/Web3Provider';

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
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Web3Provider>
        <SettingsProvider>
          <I18Provider>
            <DateProvider>
              <AppProvider>{children}</AppProvider>
            </DateProvider>
          </I18Provider>
        </SettingsProvider>
      </Web3Provider>
    </ErrorBoundary>
  );
};

export default MainProvider
