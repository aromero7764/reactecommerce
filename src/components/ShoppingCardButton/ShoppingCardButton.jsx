
import React, { useEffect, useState } from 'react';
import 'bulma-extensions/bulma-quickview/dist/css/bulma-quickview.min.css'
import bulmaQuickview from 'bulma-extensions/bulma-quickview/dist/js/bulma-quickview.js'
import '@creativebulma/bulma-badge/dist/bulma-badge.css'
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getCartListThunk } from '../../store/slices/cartList.slice';

const ShoppingCardButton = () => {

    const [quickviews, setQuickviews] = useState()

    useEffect(() => {
        setQuickviews (bulmaQuickview.attach() )
    },[])


    const dispatch = useDispatch()
    const cartList = useSelector(state => state.cartList)

    useEffect(()=> {
        dispatch(getCartListThunk())
    }, [])


   
     const token = localStorage.getItem('token');


return (

        <div>
            <div id="quickviewDefault" className="quickview">
                <header className="quickview-header">
                    <p className="title">My Cart</p>
                    <span className="delete" data-dismiss="quickview"></span>
                </header>

                <div className="quickview-body">
                    <div className="quickview-block">
                        {
                              (token) ? <Cart /> :
                              <Login text={"Login to See your Shoping Cart"} style={true}/>  
                              
                              }

                    </div>
                </div>

                <footer className="quickview-footer">

                </footer>
            </div>

            <button className="button" data-show="quickview" data-target="quickviewDefault">
                            <span><i className="fa-solid fa-cart-shopping"></i></span>
                                <span title="Badge top right" className="badge">{cartList.length}</span>
                                Shooping Cart
                            </button>  

        </div>

    );
};

export default ShoppingCardButton;