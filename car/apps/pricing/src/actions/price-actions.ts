export const LOAD_PRICES = '[PRICE] Load Prices';
export const LOAD_PRICES_SUCCESS = '[PRICE] Load Prices Success';
export const LOAD_PRICES_FAIL = '[PRICE] Load Prices Fail';

export const loadPrices = () => {
  console.log('loadPrices');
  return {
    type: LOAD_PRICES
  };
};

export const loadPricesSuccess = payload => {
  return {
    type: LOAD_PRICES_SUCCESS,
    payload
  };
};

export const loadPricesFail = payload => {
  return {
    type: LOAD_PRICES_FAIL,
    payload
  };
};
