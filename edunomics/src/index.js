import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assests/vendor/bootstrap/css/bootstrap.min.css';
import './assests/vendor/fontawesome-free/css/all.min.css';
import './assests/vendor/simple-line-icons/css/simple-line-icons.css';
import './assests/css/main.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
