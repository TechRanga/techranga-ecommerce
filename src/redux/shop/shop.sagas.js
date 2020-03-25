import {takeLatest,call,put} from 'redux-saga/effects';
import ShopActionTypes from './shop.actionTypes';
import {firestore,covertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
import {fetchCollectionsSuccess,fetchCollectionError} from './shop.actions'


function* fetchCollectionAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap =  yield call(covertCollectionSnapshotToMap,snapShot);//first argument is a function, after which you pass the parameters of that function
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionError,error.message);
    }
}

export function* startFetchCollection(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionAsync)
}