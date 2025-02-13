import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-mm2hi5g60k442r0c.us.auth0.com" // Replace with your Auth0 domain
      clientId="bfRMiZP3cm0zhxMSk4lzqjkwt7Azfnsl" // Replace with your Auth0 client ID
      authorizationParams={{
        redirect_uri: window.location.origin, // Specify the redirect URI
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
