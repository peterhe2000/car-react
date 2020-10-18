import { createStore, applyMiddleware } from 'redux';

import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootEpic from './epics/price-epics';

import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const epicMiddleware = createEpicMiddleware();

  const middlewareEnhancer = applyMiddleware(epicMiddleware);

  const composeEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(rootReducer, composeEnhancers);

  epicMiddleware.run(rootEpic);

  return store;
}
