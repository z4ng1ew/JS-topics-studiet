import React from 'react'; //внешний импорт (дефолтный)
import ReactDOM from 'react-dom/client'; //внешний импорт (дефолтный)
import './index.css'; //локальный 
import App from './App'; //локальный 
import reportWebVitals from './reportWebVitals';//локальный 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
