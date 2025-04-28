import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Asegúrate de importar BrowserRouter
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Envuelves el componente App con BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
