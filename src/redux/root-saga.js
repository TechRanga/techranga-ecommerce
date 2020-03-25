import {all,call} from 'redux-saga/effects';
import {startFetchCollection} from './shop/shop.sagas';
import {userSaga} from './user/user.sagas';

export default function* rootSaga(){
    yield all([
        call(startFetchCollection),call(userSaga)
    ]);
};