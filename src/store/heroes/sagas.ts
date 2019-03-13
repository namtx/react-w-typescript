import { heroesApi } from "@app/services/api/heroes"
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { fetchError, fetchSuccess } from "./actions"
import { HeroesActionTypes } from "./types"

function* handleFetch() {
  try {
    const res = yield call(heroesApi.getAll)
    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!))
    } else {
      yield put(fetchError('An unknow error occured'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(HeroesActionTypes.FETCH_REQUEST, handleFetch)
}

function* heroesSaga() {
  yield all([fork(watchFetchRequest)])
}

export default heroesSaga
