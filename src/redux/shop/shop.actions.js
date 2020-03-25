import ShopActionTypes from './shop.actionTypes';
import {firestore,covertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
// export const updateCollections = collectionsMap => (
//     {
//         type:ShopActionTypes.UPDATE_COLLETIONS,
//         payload:collectionsMap
//     }
// )

export const startFetchCollection = () => (
    {
        type:ShopActionTypes.FETCH_COLLECTIONS_START
    }
);

export const fetchCollectionsSuccess = collections => (
    {
        type:ShopActionTypes.FETCH_COLLETIONS_SUCCESS,
        payload:collections
    }
)

export const fetchCollectionError = error => (
    {
        type:ShopActionTypes.FETCH_COLLETIONS_FAILURE,
        payload:error
    }
)

export const fetchCollectionAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(startFetchCollection());

        collectionRef.get().then(
            async snapshot => {
                const collectionsMap  = covertCollectionSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
             }).catch(
                 error => dispatch(fetchCollectionError(error.message))
             );

    }
};

