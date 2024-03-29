import React from 'react';
import ReactDOM from "react-dom/client";
import './index.scss';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.register();
