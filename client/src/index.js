import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk'
import 'materialize-css/dist/css/materialize.min.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers';
import App from './components/App';
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);

