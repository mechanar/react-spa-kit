import { all } from 'redux-saga/effects';
import { appSaga } from './App';

export default function* rootSaga() {
  yield all([...appSaga]);
}
