import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@fontsource/poppins";
import MainProvider from './contexts/MainProvider.tsx'

console.log('🚀 Starting STAKING TOOLS application...')

// Simple loading fallback
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px'
  }}>
    <div>Loading STAKING TOOLS...</div>
  </div>
)

// Critical error fallback
const CriticalErrorFallback = ({ error }: { error: string }) => (
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
    <h2 style={{ color: 'red', marginBottom: '20px' }}>Critical Error</h2>
    <p style={{ marginBottom: '20px' }}>{error}</p>
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
      Reload Application
    </button>
  </div>
)

try {
  console.log('🔍 Looking for root element...')
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('❌ Root element not found')
    throw new Error('Root element not found')
  }

  console.log('✅ Root element found, creating React root...')
  const root = ReactDOM.createRoot(rootElement)
  
  console.log('🎨 Rendering application...')
  root.render(
    <StrictMode>
      <MainProvider>
        <App />
      </MainProvider>
    </StrictMode>
  )
  
  console.log('✅ Application rendered successfully')
} catch (error) {
  console.error('❌ Critical error during app initialization:', error)
  
  // Fallback rendering
  const rootElement = document.getElementById('root')
  if (rootElement) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown initialization error'
    rootElement.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f5f5f5;
        font-family: Arial, sans-serif;
        padding: 20px;
        text-align: center;
      ">
        <h2 style="color: red; margin-bottom: 20px;">App Failed to Load</h2>
        <p style="margin-bottom: 20px;">Error: ${errorMessage}</p>
        <button onclick="window.location.reload()" style="
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        ">Reload Application</button>
      </div>
    `
  }
}