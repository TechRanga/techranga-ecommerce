import CartActions from './cart.actionTypes';

export const toggleCartDisplay =()=>(
    {
        type: CartActions.TOGGLE_CART_DISPLAY
    }
);

export const addItem = item =>(
    {
        type:CartActions.ADD_ITEM,
        payload:item
    }
)