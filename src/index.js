import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore ,applyMiddleware ,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import './index.css';
import {searchRobots , requestRobots ,setname} from './reducer';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

const root = combineReducers({searchRobots ,requestRobots,setname})
const store = createStore(root, applyMiddleware(thunkMiddleware));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
