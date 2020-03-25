import {takeLatest,put,all, call} from 'redux-saga/effects';
import UserActionTypes from './user.actionTypes';
import {signInSuccess,signInFailure, signOutSuccess, signOutFailure} from './user.actions'
import {auth,googleProvider,createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utils';


function* handleAuth(user){
    try{
        const userRef = yield call(createUserProfileDocument,user);
        const snapShot = yield userRef.get();
        yield(put(signInSuccess({id:snapShot.id,...snapShot.data()})));
    }catch(error){
        yield(put(signInFailure(error)));
    }
}
export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield handleAuth(user);
    }catch(error){
        yield(put(signInFailure(error)));
    }
}

export function* onGoogleSignIn(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* signInWithEmail({payload:{email,password}}){
    try{
        const {user} = auth.signInWithEmailAndPassword(email,password);
        yield handleAuth(user);
    }catch(error){
        yield(put(signInFailure(error)));
    }
}

export function* onEmailSignIn(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

function* checkSession(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield handleAuth(userAuth);
    }catch(error){
        yield put(signInFailure(error));
    }
};

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,checkSession)
};

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(error){
        yield put(signOutFailure(error.message));
    }
}

export function* startSignOut(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

export function* userSaga(){
    yield all( [call(onGoogleSignIn),call(onEmailSignIn),call(onCheckUserSession),call(startSignOut)] )
};


