import CartActions from './cart.actionTypes';
const INITIAL_STATE = {
    hidden:true
};

const cartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActions.TOGGLE_CART_DISPLAY:
            return{
                ...state,
                hidden:!state.hidden
            };
        default:
            return state;    
    }
};

export default cartReducer;