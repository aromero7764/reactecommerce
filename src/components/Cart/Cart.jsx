import React, { useEffect, useState } from 'react';
import 'bulma-list/css/bulma-list.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCartListThunk } from '../../store/slices/cartList.slice';
/* import './Cart.css' */

const Cart = () => {
    const [count, setCount] = useState(0)

    const dispatch = useDispatch()
    const cartList = useSelector(state => state.cartList)

    useEffect(()=> {
        dispatch(getCartListThunk())
    }, [])

    console.log(cartList)

    return (
        <aside>

            <div className="box" id="cart" data-example>
                <h1 className="title is-4 mb-2">Welcome </h1>

                <div className="list has-visible-pointer-controls">
                    {/* star her */}
                    {

                        cartList.map(item => (

                            <div key={item.id} className="list-item">

                        <div className="list-item-content">
                            <div className="list-item-title">{item.title}</div>
                        </div>

                        <div className="list-item-controls">
                            <div className="is-flex is-align-items-center">
                                <button className='button'><span>{item.productsInCart.quantity}</span></button>
                                <span>$ {item.price}</span>

                                <div className="control ml-3 is-hidden-mobile">
                                </div>

                                <div className="buttons ml-3">
                                    <button className="button is-hidden-mobile">
                                        <span className="icon">
                                        <i class="fa-regular fa-trash-can"></i>
                                        </span>
                                        
                                    </button>

                                    <button className="button is-hidden-tablet">
                                        <span className="icon">
                                            <i className="fas fa-pencil-alt"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                        ))


                    }
                    
{/* end */}
                   <footer>
                   <button className="button is-danger is-fullwidth">Chekout</button> 
                   </footer>
                    
                </div>
               
            </div> 
</aside>
    );
};

export default Cart;