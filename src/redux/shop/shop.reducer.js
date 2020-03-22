import ShopActionTypes from './shop.actionTypes';

const INITIAL_STATE = {
    collections:null,
    isFetching:false,
    errorMessage:undefined
}

const shopReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFetching:true
            };
        case ShopActionTypes.FETCH_COLLETIONS_SUCCESS:
            return{
                ...state,
                isFetching:false,
                collections:action.payload
            };
        case ShopActionTypes.FETCH_COLLETIONS_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload
            };  
        default:
            return state;
    }
};

export default shopReducer;