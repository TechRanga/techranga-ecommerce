import {all,takeLatest,call,put} from 'redux-saga/effects';
import {clearCart} from './cart.actions';
import UserActionTypes from '../user/user.actionTypes';

export function* clearCartOnSignOut(){
    yield put(clearCart());
};

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut);
};

export function* cartSagas(){
    yield (all([call(onSignOutSuccess)]))
};