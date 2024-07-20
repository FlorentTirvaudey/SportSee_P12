import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import App from './components/App';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashbord from './components/Dashboard';
import Page404 from './components/Page404';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user/:userId/:dataType" element={<Dashbord />} />
        <Route path="/error" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);