import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import {connect} from 'react-redux';
import {toggleCartDisplay} from '../../redux/cart/cart.actions'
const CartIcon = ({toggleCartDisplay}) =>(
    <div className='cart-icon' onClick={toggleCartDisplay}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => (
    {
        toggleCartDisplay: ()=>dispatch(toggleCartDisplay())
    }
);
export default connect(null,mapDispatchToProps)(CartIcon);

