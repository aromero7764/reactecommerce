import React from 'react';
import 'bulma/css/bulma.min.css';
import PurchasesButton from '../PurchasesButton/PurchasesButton';
import { useNavigate } from 'react-router-dom';


const NavBarUser = () => {
    const navigate = useNavigate();


    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <button className='navbar-item'>
                        e-Commerce
                </button>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a onClick={()=> navigate("/login")} className="button is-light">
                                <strong>Loging</strong>
                            </a>
                            <PurchasesButton />
                            <a className="button is-light">
                                <strong>Cart</strong>
                            </a>
                           
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default NavBarUser;