export const LOAD_PRICES = '[PRICE] LOAD_PRICES';
export const LOAD_PRICES_SUCCESS = '[PRICE] LOAD_PRICES_SUCCESS';
export const LOAD_PRICES_FAIL = '[PRICE] LOAD_PRICES_FAIL';

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
