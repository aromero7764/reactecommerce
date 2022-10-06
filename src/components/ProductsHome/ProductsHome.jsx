import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartItemThunk } from "../../store/slices/cartList.slice";
import { getProductsThunk } from "../../store/slices/products.slice";
import Loader from "../Loader/Loader";
import './ProductsHome.css'



const ProductsHome = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    /* aqui me traigo mis productos */
    const products = useSelector( state => state.products)
    const loading = useSelector(state => state.isLoading)

        
useEffect(()=> {
    dispatch(getProductsThunk())

}, [])

//id: id
// qty:


const token = localStorage.getItem('token');


/* realizada con thunk */
const addCart = (qty, id) => {
    
const addNew = {
    id: id,
    quantity: qty
}     
 if (!token) {
    alert("please login to add products to your cart")
    navigate("/login")

 } else {
    dispatch(addCartItemThunk(addNew))
 }
} 


    return (
        <div className='columns is-multiline'>
            {
                products.map(product => (
                    <div key={product.id} className="column is-4">
                        <div /* navigate(`/pokedex/${pokemonDetails.id}`) */>
                            <div className="card" >
                                <div className="card-image is-clickable" onClick={()=> navigate(`/product/${product.id}`) }>
                                    <figure className='image'>
                                        <img className="imageP" src={product.productImgs[0]} alt="image-products" />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media-content">
                                        <p className="title is-4">{product.title}</p>
                                        <p className='subtitle is-6'>Price {product.price}</p>
                                    </div>
                                    <div>
                                       <footer className='card-footer'>
                                            <p className='card-footer-item'></p>
                                        </footer> 
                                    </div>
                                    <div className="content">
                                        <div className="tags">
                                            
                                            <span className="tag">{product.category.name}</span>
                                            
                                        </div>
                                        
                                    </div>
                                    <button onClick={()=> addCart(1, product.id)} className="button is-danger">Add to cart</button> 
                                </div> 
                                
                            </div>
                            

                        </div>
                    </div>
                ))

            }





        </div>
    );
};

export default ProductsHome;