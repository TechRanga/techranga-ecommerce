import ShopActionTypes from './shop.actionTypes';

export const updateCollections = collectionsMap => (
    {
        type:ShopActionTypes.UPDATE_COLLETIONS,
        payload:collectionsMap
    }
)