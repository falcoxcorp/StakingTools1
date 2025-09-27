import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@fontsource/poppins";
import MainProvider from './contexts/MainProvider.tsx'

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    ReactDOM.createRoot(rootElement).render(
      <MainProvider>
        <App />
      </MainProvider>
    );
  } catch (error) {
    console.error('Error rendering app:', error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; color: red;">
        <h1>Error loading application</h1>
        <p>Check console for details</p>
      </div>
    `;
  }
} else {
  console.error('Root element not found');
}
