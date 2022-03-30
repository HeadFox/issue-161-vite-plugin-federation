import { start, registerApplication } from 'single-spa';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Register applications here
 */

registerApplication(
    'myApp',
    //@ts-ignore
    () => import('myApp/MfeApp'),
    (location) => location.pathname.startsWith('/')
);

start();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
