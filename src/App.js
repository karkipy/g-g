import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TypeKids from './screens';
import './App.css';
import reducer from './engine/store';

const store = createStore(
  reducer,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <TypeKids />
  </Provider>
);

export default App;
