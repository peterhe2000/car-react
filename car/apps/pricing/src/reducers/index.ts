import { combineReducers } from 'redux';

import prices from './price-reducer';

export default combineReducers({
  prices: prices
});
