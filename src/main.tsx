import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@fontsource/poppins";
import MainProvider from './contexts/MainProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MainProvider>
    <App />
  </MainProvider>
)
