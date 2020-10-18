import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap, tap, takeUntil } from 'rxjs/operators';
import { LoadPrices, LoadPricesSuccess } from '../actions/price-actions';

const ENDPOINT = './data/prices.json';

const loadPricesEpic = action$ => {
  return action$.pipe(
    ofType(LoadPrices),
    tap(value => console.log('Gonna fetch', value)),
    mergeMap(action =>
      ajax.getJSON(ENDPOINT).pipe(
        tap(value => console.log('Loading!', value)),
        map(response => LoadPricesSuccess(response.prices)),
        takeUntil(
          action$.pipe(
            tap(value => console.log('CANCELLING!', value)),
            ofType(FETCH_CHARACTERS)
          )
        )
      )
    )
  );
};

export default loadPricesEpic;
