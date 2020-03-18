export const addItemToCart=(cartItems=[], cartItemToAdd)=>{
    const exists = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
         );
    if(exists){
        return cartItems.map(
            cartItem=>
            cartItem.id===cartItemToAdd.id
            ?{...cartItem,quantity:cartItem.quantity+1}
            :cartItem
        );
    };    
    
    return[...cartItems,{...cartItemToAdd,quantity:1}];
}

export const clearFromCart=(cartItems,cartItemToRemove)=>{
    let filteredCartItems = cartItems.filter(
        cartItem =>
            cartItem.id!==cartItemToRemove.id
    )
    return filteredCartItems;
};


export const removeItemFromCart=(cartItems=[], cartItemToRemove)=>{
    const existingItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
         );
    if(existingItem){
        if(existingItem.quantity===1){
            let filteredCartItems = cartItems.filter(
                cartItem =>
                    cartItem.id!==cartItemToRemove.id
            )
            return filteredCartItems;
        }
        return cartItems.map(
            cartItem=>
            cartItem.id===cartItemToRemove.id
            ?{...cartItem,quantity:cartItem.quantity-1}
            :cartItem
        );
    };
}