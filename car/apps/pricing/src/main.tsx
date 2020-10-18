import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './containers/app';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootEpic from './epics/price-epics';

import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware();

const middlewareEnhancer = applyMiddleware(epicMiddleware);

const composeEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducer, composeEnhancers);

epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
