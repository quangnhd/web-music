import { all } from "redux-saga/effects";
import watchUserAction from "./reducer/user/userSaga";
import watchSongAction from "./reducer/song/songSaga";

export default function* rootSaga() {
    yield all([watchUserAction(), watchSongAction()])
}