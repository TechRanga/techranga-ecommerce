import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import {connect} from 'react-redux';
import {toggleCartDisplay} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

const CartIcon = ({toggleCartDisplay,itemCount}) =>(
    <div className='cart-icon' onClick={toggleCartDisplay}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => (
    {
        toggleCartDisplay: ()=>dispatch(toggleCartDisplay())
    }
);

const mapStateToProps = state =>(
    {
        itemCount : selectCartItemsCount(state)
    }
);

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);

