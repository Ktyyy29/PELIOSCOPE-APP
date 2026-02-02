// FIX: Moved import statements to the top level of the module to resolve syntax errors.
// All imports must be declared at the top, outside of any conditional blocks.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './contexts/AppContext';

// Automatically redirect to HTTP if the app is loaded on HTTPS.
// This is required to bypass browser security (Mixed Content)
// and allow the web app to connect to the insecure (http) ESP32 device.
if (window.location.protocol === 'https:') {
  window.location.href = `http://${window.location.host}${window.location.pathname}${window.location.search}`;
} else {
  // The app will only render if it's running on HTTP.
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Could not find root element to mount to");
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  );
}
