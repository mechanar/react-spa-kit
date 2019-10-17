import { fork, put, take } from 'redux-saga/effects';
import { get } from 'utils/api';
import { GET_APP_DATA, getAppDataSuccess, getAppDataError } from './action';

export function* getApplicationData() {
  while (true) {
    yield take(GET_APP_DATA);
    try {
      const response = yield get('/app');
      yield put(getAppDataSuccess(response));
    } catch (error) {
      yield put(getAppDataError(error));
    }
  }
}

export default [fork(getApplicationData)];
