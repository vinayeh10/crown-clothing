import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { clearAllCartItems } from '../../redux/cart/cart.actions';

const handleSignOnut = (clearCart) => {
    auth.signOut();
    clearCart();
};

const Header = ({currentUser, hidden, clearCart}) => {
    return (
        <div className='header'>
            <Link to="/" className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                {
                    currentUser ? 
                    <div className='option' onClick={ () => handleSignOnut(clearCart)}>SIGN OUT</div>
                    :
                    <Link to='/signin' className='option'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
};

const mapStateProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearAllCartItems())
})

export default connect(mapStateProps, mapDispatchToProps)(Header);