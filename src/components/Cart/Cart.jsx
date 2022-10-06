import React, { useEffect, useState } from 'react';
import 'bulma-list/css/bulma-list.css'
import { useDispatch, useSelector } from 'react-redux';
import { getCartListThunk, updateCartItemThunk } from '../../store/slices/cartList.slice';
import { useNavigate } from 'react-router-dom';
/* import './Cart.css' */

const Cart = ({ishidden}) => {

    const [itemsInCart, setItemsInCart] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    /* "para obtener los productos de la cart" */
    const cartList = useSelector(state => state.cartList)

   useEffect(()=> {
        dispatch(getCartListThunk())
 

    }, []) 


    const updateCart = (qty, id) => {
        const updateNew = {
                id: id,
                newQuantity: qty, 
            }
dispatch(updateCartItemThunk(updateNew))
}


const ItemsInCart = 
    cartList.reduce( (acumulador, producto) => 
                        acumulador + producto.productsInCart.quantity, 0)



const TotalSumItemsInCart = 
    cartList.reduce( (acumulador, producto) => 
                        acumulador + (producto.productsInCart.quantity * producto.price) , 0)

console.log(TotalSumItemsInCart)


const sustracProduct = ()=> {
    if(qty >= 1)  {
        alert("llego al limite")
    } 
}

    return (
        <aside>

            <div className="box" id="cart">
                <h1 className="title is-4 mb-2"></h1>

             
{/* ---------- */}

                    <div className="cart-table" >

                        <div className="columns is-hidden-mobile">
                            <div className="column is-5">
                                <a href="/" className="button is-outlined">
                                    <span className="icon">
                                        <i className="fas fa-arrow-left">
                                        </i></span>

                                </a>
                            </div>

                            <div className="column is-4 has-text-centered has-text-weight-bold">
                                Quantity
                            </div>
                            <div className="column is-3 has-text-right has-text-weight-bold">
                                Total
                            </div>

                        </div>
                        {
                            cartList.map(item => (

                                <div key={item.id}>
                            <div className="is-hidden-mobile line-item-desktop">
                                <div className="columns">
                                    <div className="column is-5 is-size-6">
                                        <p className="mb-1">
                                            <strong> {item.title}</strong>
                                        </p>
                                        <div className="mb-1">
                                        <div className="is-size-6">
                                      <p>Price: $ {item.price}</p>
                                    </div>
                                        </div>
                                        <div>
                                            <button onClick={()=> updateCart(0, item.id)} className="button is-small">
                                                <span><i className="fa-regular fa-trash-can"></i></span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="column is-4 has-text-centered">
                                        <div className="line-item-quantity-control field has-addons">
                                            
                                            <p onClick={()=> updateCart((item.productsInCart.quantity - 1), item.id)} 
                                                className="control">
                                                    <a className="button is-small"> - </a></p>
                                            
                                            <div className="control">
                                                <p className="input has-text-centered is-small"> {item.productsInCart.quantity} </p> </div>
                                            
                                            <p onClick={()=> updateCart((item.productsInCart.quantity + 1), item.id)} 
                                                    className="control"><a className="button is-small">+</a></p>
                                        </div>
                                    </div>
                                    <div className="column is-3 has-text-right">${item.productsInCart.quantity * item.price}.00 </div>

                                </div>

                            </div>

                            <div className="is-hidden-tablet line-item-mobile">
                                <div className="columns is-mobile">
                                    <div className="column">
                                        <a href="/" className="mb-1">
                                            <strong>{item.title}</strong></a>
                                        <div className="mb-1">Price:  $ {item.price}</div>

                                        <div className="line-item-quantity-control field has-addons">
                                            <p className="control">
                                                <a onClick={()=> updateCart((item.productsInCart.quantity - 1), item.id)} className="button"> - </a>
                                            </p>
                                            <div className="control">
                                                <p className="input has-text-centered"> {item.productsInCart.quantity} </p>
                                            </div>
                                            <p className="control">

                                                <a onClick={()=> updateCart((item.productsInCart.quantity + 1), item.id)} className="button"> + </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                            ))
                        }
                        

                        <div className="columns is-hidden-mobile">
                            <div className="column is-6 is-offset-6 has-text-right">
                                <p > Subtotal: <span className="is-size-4"> ${TotalSumItemsInCart}.00 </span>
                                    <br />
                                    <em >Shipping &amp; taxes calculated at checkout</em></p>
                                <br />
                                <button onClick={()=> navigate("/purchasescard")} className={`button is-medium is-danger ${ishidden}`}>Checkout</button>

                            </div>
                        </div>

                        <div className="columns is-hidden-tablet">
                            <div className="column is-hidden-tablet">
                                <p> Subtotal: <span className="is-size-4"> ${TotalSumItemsInCart}.00</span>
                                    <br />
                                    <em >Shipping &amp; taxes calculated at checkout</em></p>
                                <br />
                                <button onClick={()=> navigate("/purchasescard")} className={`button is-medium is-fullwidth mb-4 is-danger ${ishidden}`}>Checkout</button>
                                <a href="/" className="button is-medium is-fullwidth is-outlined">
                                    <span className="icon"><i className="fas fa-arrow-left">
                                    </i></span>
                                    <span >Continue shopping</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    

                    {/* .......... */}
            </div>
                 
                    
             
</aside>
    );
};

export default Cart;