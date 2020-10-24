import { LOAD_PRICES_SUCCESS } from '../actions/price-actions';
const pricesReducer = (prices = [], action) => {
  if (action.type === LOAD_PRICES_SUCCESS) {
    return action.payload;
  }
  return prices;
};

export default pricesReducer;
