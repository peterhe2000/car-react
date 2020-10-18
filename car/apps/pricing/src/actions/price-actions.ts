export const LoadPrices = '[PRICE] Load Prices';
export const LoadPricesSuccess = '[PRICE] Load Prices Success';
export const LoadPricesFail = '[PRICE] Load Prices Fail';

export const loadPrices = () => {
  return {
    type: LoadPrices
  };
};

export const loadPricesSuccess = payload => {
  return {
    type: LoadPricesSuccess,
    payload
  };
};

export const loadPricesFail = payload => {
  return {
    type: LoadPricesFail,
    payload
  };
};
