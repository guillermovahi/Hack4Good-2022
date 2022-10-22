import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './js/App';
import Ejemplo from './js/Ejemplo';
import QR from './js/QR';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
<<<<<<< HEAD
const root1 = ReactDOM.createRoot(document.getElementById('middle'));
const root2 = ReactDOM.createRoot(document.getElementById('mainPageLogged'));
=======
const root1 = ReactDOM.createRoot(document.getElementById('QR'));
const root2 = ReactDOM.createRoot(document.getElementById('mainPageLogged'));


>>>>>>> 8e9acb86150f547e4bf556b8ac5f25b24c2d7881
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root1.render(
  <React.StrictMode>
    <QR />
  </React.StrictMode>
);

root2.render(
  <React.StrictMode>
    <Ejemplo />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
