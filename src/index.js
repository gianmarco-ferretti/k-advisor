import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {applyMiddleware, createStore, compose} from "redux";
import allReducers from "./reducers";
import {fetchCommenti, fetchRistoranti} from "./actions";
import thunk from "redux-thunk";

const composedEnhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const store = createStore(allReducers, composedEnhancer);

store.dispatch(fetchRistoranti)

store.dispatch(fetchCommenti('https://jsonplaceholder.typicode.com/users'))



ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
