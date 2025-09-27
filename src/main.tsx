import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@fontsource/poppins";
import MainProvider from './contexts/MainProvider.tsx'

// Simple loading fallback
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif'
  }}>
    <div>Loading STAKING TOOLS...</div>
  </div>
)

// Error fallback for critical failures
const CriticalErrorFallback = ({ error }: { error: string }) => (
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
    <h2 style={{ color: 'red' }}>Critical Error</h2>
    <p>{error}</p>
    <button onClick={() => window.location.reload()}>Reload</button>
  </div>
)

try {
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element not found')
  }

  const root = ReactDOM.createRoot(rootElement)
  
  // Render with error handling
  root.render(
    <StrictMode>
      <Suspense fallback={<LoadingFallback />}>
        <MainProvider>
          <App />
        </MainProvider>
      </Suspense>
    </StrictMode>
  )
  
  console.log('✅ App rendered successfully')
} catch (error) {
  console.error('❌ Failed to render app:', error)
  
  // Fallback rendering
  const rootElement = document.getElementById('root')
  if (rootElement) {
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
      ">
        <h2 style="color: red;">App Failed to Load</h2>
        <p>Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
        <button onclick="window.location.reload()" style="
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        ">Reload</button>
      </div>
    `
  }
}