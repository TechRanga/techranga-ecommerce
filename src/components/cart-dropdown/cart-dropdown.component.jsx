import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {withRouter} from 'react-router-dom';
import {toggleCartDisplay} from '../../redux/cart/cart.actions'
const Cart =({cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length?
                cartItems.map(
                    cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )
                ):<span className='empty-cart-message'>Your Cart Is Empty</span>
            }
        </div>
        <CustomButton
            onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartDisplay());
            }
            }
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = (state) => (
    {
        cartItems:selectCartItems(state)
    }
);

export default withRouter(connect(mapStateToProps)(Cart));

