window.jQuery = require('jquery');
jQuery.noConflict();

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import poolReducer from './reducers/poolReducer';
import { loadPools } from './actions/poolActions';
import List from './components/List';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

Object.defineProperties(Array.prototype, {
  last: { value: function(){ return this[this.length-1]; }},
  first: { value: function(){ return this[0]; }}
});

const middleware = applyMiddleware(thunk);
const store = createStore(poolReducer,middleware);

store.subscribe(function(){
  console.log('State changed',store.getState());
});

store.dispatch(function(dispatch){
  //Will try to load some tasks from a remote server
  loadPools(dispatch);
});

// store.dispatch({type: 'ADD_TASK', payload: {title: 'First Task'}});

ReactDOM.render((
  <Provider store={store}>
    <List />
  </Provider>
), document.getElementById('app'));
