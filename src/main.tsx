import './styles/index.css';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error('#root element missing from index.html');

const app = (
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Prerendered pages already contain the markup; dev and unknown pages start empty.
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);
