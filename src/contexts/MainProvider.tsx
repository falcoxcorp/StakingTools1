import { ChildrenProps } from '../common/types/common';
import { I18Provider } from './I18Context';
import DateProvider from './DateProvider';
import { AppProvider } from './AppProvider';
import SettingsProvider from './SettingsProvider';
import Web3Provider from './block_chain/Web3Provider';

const MainProvider = ({ children }: ChildrenProps) => {
  return (
    <Web3Provider>
      <SettingsProvider>
        <I18Provider>
          <DateProvider>
            <AppProvider>{children}</AppProvider>
          </DateProvider>
        </I18Provider>
      </SettingsProvider>
    </Web3Provider>
  );
};

export default MainProvider
