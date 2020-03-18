/* eslint-disable no-unused-expressions */
import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCartDisplay} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';

const Header =({currentUser,hidden})=> {
    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {
                    currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :<Link className='option' to='/signIn'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {hidden?null:<Cart />}
        </div>
)
};

const mapStateToProps = createStructuredSelector(
    {
        currentUser:selectCurrentUser,
        hidden:selectCartDisplay
    }
);

export default connect(mapStateToProps)(Header);
