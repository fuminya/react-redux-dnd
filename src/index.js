import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import dnd from './reducers'
import App from './components/App';

import { dragStart } from './actions';

// storeはアプリケーションで単一のもので、stateを保持
// storeを作成する
let store = createStore(dnd);

store.dispatch(dragStart('aaa'));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);