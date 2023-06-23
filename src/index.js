import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* обгортка BrowserRouter для керування маршрутами */}
    {/* basename="/prototype" потрібен для того, щоб все працювало на GitHub */}
    <BrowserRouter basename="/prototype">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
