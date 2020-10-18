import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './containers/app';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics/price-epics';

import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const middlewareEnhancer = applyMiddleware(epicMiddleware);
const composeEnhancers = compose(
  middlewareEnhancer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
);
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
