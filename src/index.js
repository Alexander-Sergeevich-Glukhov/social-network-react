import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux_store';
import { Provider } from 'react-redux';




ReactDOM.render(
    <BrowserRouter >
        <React.StrictMode>
                <Provider store={store}>
                <App  store={store}/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>, document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
