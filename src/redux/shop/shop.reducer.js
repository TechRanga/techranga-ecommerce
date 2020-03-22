import ShopActionTypes from './shop.actionTypes';

const INITIAL_STATE = {
    collections:null
}

const shopReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLETIONS:
            return{
                ...state,
                collections:action.payload
            }
        default:
            return state;
    }
};

export default shopReducer;