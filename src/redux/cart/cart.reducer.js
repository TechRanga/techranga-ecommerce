import CartActions from './cart.actionTypes';
import {addItemToCart,clearFromCart,removeItemFromCart} from './cart.utils';
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
        case CartActions.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }    
        case CartActions.CLEAR_ITEM:
            return{
                ...state,
                cartItems:clearFromCart(state.cartItems,action.payload)
            };  
        case CartActions.CLEAR_CART:
            return{
                ...state,
                cartItems:[]
            }
        default:
            return state;    
    }
};

export default cartReducer;