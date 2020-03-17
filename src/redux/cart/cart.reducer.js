import CartActions from './cart.actionTypes';
import {addItemToCart} from './cart.utils';
const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
};

const cartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActions.TOGGLE_CART_DISPLAY:
            return{
                ...state,
                hidden:!state.hidden
            };
        case CartActions.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            };  
        default:
            return state;    
    }
};

export default cartReducer;