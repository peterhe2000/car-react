import { LoadPricesSuccess } from '../actions/price-actions';

const pricesReducer = (prices = [], action) => {
  if (action.type === LoadPricesSuccess) {
    return action.payload;
  }
  return prices;
};

export default pricesReducer;
