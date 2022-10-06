import React from 'react';
import 'bulma/css/bulma.min.css';
import PurchasesButton from '../PurchasesButton/PurchasesButton';
import { useNavigate } from 'react-router-dom';
import '@creativebulma/bulma-badge/dist/bulma-badge.css'
import ShoppingCardButton from '../ShoppingCardButton/ShoppingCardButton';


const NavBarUser = () => {
    const navigate = useNavigate();


    return (
        <nav className="navbar is-primary has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className='title has-text-white' href="/">E-commerce</a>

                <a role="button" className="navbar-burger" aria-label="menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu is-active">
                <div className="navbar-end">

                <a onClick={()=> navigate("/")} class="navbar-item">
                <span  class="icon"> <i className="fa-solid fa-house"></i></span>
           <span> Home</span></a>

                <a onClick={()=> navigate("/login")} class="navbar-item">
                <span  class="icon"> <i className="fa-solid fa-right-to-bracket"></i></span>
           <span> Login</span></a>
                <a class="navbar-item">
                <PurchasesButton />
                </a>
               

                <a class="navbar-item">
                <ShoppingCardButton />
                </a>
                

                </div>
            </div>
        </nav>

    );
};

export default NavBarUser;