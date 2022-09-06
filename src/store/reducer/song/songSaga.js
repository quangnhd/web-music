import { takeLatest } from "redux-saga/effects";
import { load } from "./songActions";
import { LOAD_REQUEST } from "./songActionTypes";

export default function* watchSongAction() {
    yield takeLatest(LOAD_REQUEST, load)
}