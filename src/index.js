import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // SASS -> /build/styles.ss
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));

if (process.env.NODE_ENV !== 'development') { // pajungt, kad deployinus taptu production
    registerServiceWorker();
}