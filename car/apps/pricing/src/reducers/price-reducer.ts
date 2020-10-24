import {
  createEntityAdapter
  // omit other imports
} from '@reduxjs/toolkit';
import { LOAD_PRICES_SUCCESS } from '../actions/price-actions';

const initialState = {
  prices: []
};

const pricesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRICES_SUCCESS:
      return { ...state, prices: action.payload };
  }
  return state;
};

export default pricesReducer;
