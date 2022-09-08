import { takeLatest } from "redux-saga/effects";
import { loadLike, like, load, unlike } from "./songActions";
import { LIKE_REQUEST, LOAD_LIKE_REQUEST, LOAD_REQUEST, UNLIKE_REQUEST } from "./songActionTypes";

export default function* watchSongAction() {
  yield takeLatest(LOAD_REQUEST, load)
  yield takeLatest(LOAD_LIKE_REQUEST, loadLike)
  yield takeLatest(LIKE_REQUEST, like)
  yield takeLatest(UNLIKE_REQUEST, unlike)
}