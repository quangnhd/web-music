import { call, put } from 'redux-saga/effects'
import { getAll } from '../../../api/song'
import { deleteLike, getLike, postLike } from '../../../api/like'
import { LIKE_FAILURE, LIKE_SUCCESS, LOAD_FAILURE, LOAD_LIKE_FAILURE, LOAD_LIKE_SUCCESS, LOAD_SUCCESS, UNLIKE_FAILURE, UNLIKE_REQUEST, UNLIKE_SUCCESS } from './songActionTypes'


export function* load() {
  try {
    const response = yield call(getAll)
    yield put({
      type: LOAD_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    yield put({
      type: LOAD_FAILURE,
      payload: error
    })
  }
}

export function* loadLike({ payload }) {
  try {
    const response = yield call(getLike, payload)
    yield put({
      type: LOAD_LIKE_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    yield put({
      type: LOAD_LIKE_FAILURE,
      payload: error
    })
  }
}

export function* like({ payload }) {
  try {
    const response = yield call(postLike, payload)
    yield put({
      type: LIKE_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    yield put({
      type: LIKE_FAILURE,
      payload: error
    })
  }
}


export function* unlike({ payload }) {
  try {
    const response = yield call(deleteLike, payload.id)
    yield put({
      type: UNLIKE_SUCCESS,
      payload: payload.songId
    })
  } catch (error) {
    yield put({
      type: UNLIKE_FAILURE,
      payload: error
    })
  }
}
