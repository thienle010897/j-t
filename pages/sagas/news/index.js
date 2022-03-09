import { take, takeEvery, takeLatest, 
    put, all, delay, fork, call 
  } from "redux-saga/effects";
import { loadNewsError, loadNewsSuccess } from "../../actions";
import * as ActionTypes from '../../constants';
import {loadNewsApi} from "../../api"

function* onLoadNewsStartAsync () {
  try {
      const response = yield call(loadNewsApi);
      if(response.status === 200) {
          yield delay(500);
          yield put(loadNewsSuccess(response.data))
      }
  } catch (error) {
      yield put(loadNewsError(error.response.data))
  }
}

function* onLoadNews () {
    yield takeEvery(types.LOAD_NEWS_START, onLoadNewsStartAsync)
}


const newsSaga = [
  fork(onLoadNews)
]
export default function* newsSagas () {
  yield all([...newsSaga]);
}