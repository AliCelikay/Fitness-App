import React from 'react';
import ReactDOM from 'react-dom';
// Allows us to use the routes in App.js
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// react version 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
