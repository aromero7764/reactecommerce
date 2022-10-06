import React from 'react';
import 'bulma/css/bulma.min.css';
import PurchasesButton from '../PurchasesButton/PurchasesButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCartOpenState } from '../../store/slices/CartOpen.slice';
import '@creativebulma/bulma-badge/dist/bulma-badge.css'
import ShoppingCardButton from '../ShoppingCardButton/ShoppingCardButton';


const NavBarUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const cartOpen = useSelector(state => state.cartOpen)

    const setCartIsOpen = () => dispatch(setCartOpenState(!cartOpen))


    return (
        <nav className="navbar is-primary has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className='title' href="/">Ecomerce</a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu is-active">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a onClick={()=> navigate("/login")} className="button is-light">
                                <strong>Loging</strong>
                            </a>
                            <PurchasesButton />
                            <ShoppingCardButton />
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default NavBarUser;