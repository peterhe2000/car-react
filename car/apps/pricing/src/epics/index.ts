import { combineEpics } from 'redux-observable';
import loadPricesEpic from './price-epics';

export default combineEpics(loadPricesEpic);
