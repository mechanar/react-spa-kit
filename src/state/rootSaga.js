import { all } from 'redux-saga/effects';
import { appSaga } from './MainPage';

export default function* rootSaga() {
  yield all([...appSaga]);
}
