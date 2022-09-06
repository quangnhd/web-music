import { call, put } from 'redux-saga/effects'
import { getAll } from '../../../api/song'
import { LOAD_FAILURE, LOAD_SUCCESS } from './songActionTypes'


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
