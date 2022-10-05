
import React, { useEffect, useState } from 'react';
import 'bulma-extensions/bulma-quickview/dist/css/bulma-quickview.min.css'
import bulmaQuickview from 'bulma-extensions/bulma-quickview/dist/js/bulma-quickview.js'
import '@creativebulma/bulma-badge/dist/bulma-badge.css'
import Cart from '../Cart/Cart';

const ShoppingCardButton = () => {

    const [quickviews, setQuickviews] = useState()

    useEffect(() => {
        setQuickviews (bulmaQuickview.attach() )
    },[])


return (

        <div>
            <div id="quickviewDefault" className="quickview">
                <header className="quickview-header">
                    <p className="title">My Cart</p>
                    <span className="delete" data-dismiss="quickview"></span>
                </header>

                <div className="quickview-body">
                    <div className="quickview-block">

                        <Cart />


                    </div>
                </div>

                <footer className="quickview-footer">

                </footer>
            </div>

            <button className="button" data-show="quickview" data-target="quickviewDefault">
                            <span><i className="fa-solid fa-cart-shopping"></i></span>
                                <span title="Badge top right" className="badge">8</span>
                                Shooping Cart
                            </button>  

        </div>

    );
};

export default ShoppingCardButton;