import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@fontsource/poppins";
import MainProvider from './contexts/MainProvider.tsx'

try {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element not found')
  }

  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <MainProvider>
        <App />
      </MainProvider>
    </StrictMode>
  )
} catch (error) {
  console.error('Failed to render app:', error)
  document.body.innerHTML = `
    <div style="padding: 20px; color: red; font-family: Arial;">
      <h2>App Failed to Load</h2>
      <p>Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
      <button onclick="window.location.reload()">Reload</button>
    </div>
  `
}
