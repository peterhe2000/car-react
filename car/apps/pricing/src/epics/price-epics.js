import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap, tap, takeUntil } from 'rxjs/operators';
import { LoadPrices, loadPricesSuccess } from '../actions/price-actions';

const ENDPOINT = 'http://localhost:5000/api/prices';

const loadPricesEpic = action$ => {
  return action$.pipe(
    ofType(LoadPrices),
    tap(value => console.log('Gonna fetch', value)),
    mergeMap(action =>
      ajax.getJSON(ENDPOINT).pipe(
        tap(value => console.log('Loading!', value)),
        map(response => loadPricesSuccess(response))
      )
    )
  );
};

export default loadPricesEpic;
