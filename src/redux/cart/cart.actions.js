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
);

export const clearItemFromCart = item =>(
    {
        type:CartActions.CLEAR_ITEM,
        payload:item
    }
);

export const removeItem = item =>(
    {
        type:CartActions.REMOVE_ITEM,
        payload:item
    }
)