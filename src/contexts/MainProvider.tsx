import { ErrorBoundary } from 'react-error-boundary';
import { ChildrenProps } from '../common/types/common';
import { I18Provider } from './I18Context';
import DateProvider from './DateProvider';
import { AppProvider } from './AppProvider';
import SettingsProvider from './SettingsProvider';
import Web3Provider from './block_chain/Web3Provider';

function ErrorFallback({error}: {error: Error}) {
  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
      <h2>Provider Error:</h2>
      <pre>{error.message}</pre>
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
