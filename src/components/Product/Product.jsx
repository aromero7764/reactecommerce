import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loader } from 'react-bulma-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addCartItemThunk } from '../../store/slices/cartList.slice';
import { getProductsThunk } from '../../store/slices/products.slice';
import NavBarUser from '../NavBar/NavBarUser';
import './Product.css'

const Product = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
            .then(res => setProduct(res.data.data.product))
            .catch(error => {alert(`no se encontro el producto con el id ${id}`)
                        navigate("/")})
            .finally(()=> setLoading(false))
            setQty(1)
    }, [id])


    /* aqui me traigo mis productos */
    const allProducts = useSelector( state => state.products)

        
useEffect(()=> {
    dispatch(getProductsThunk())

}, [])


  /*   const ProductsDetail = allProducts.find((product) => allProducts.id === id);
  const relatedProducts = allProducts.filter(
    (product) => allProducts.category.id === id
  ); */


  const ProductsDetail = allProducts.find((product) => product.id === Number(id));
  const relatedProducts = allProducts.filter(
    (product) => product.category.id === ProductsDetail.category.id)

    const addCart = (qty, id) => {

        const addNew = {
            id: id,
            quantity: qty
        }
dispatch(addCartItemThunk(addNew))
        
    } 

    console.log(relatedProducts)
    console.log(ProductsDetail)
    console.log(id)


    return (
        <div>
              { loading ? <Loader /> : <>
              
            <NavBarUser />

            <div className="someSpace">
                <span></span>
            </div>

            <div>
                <div className='container is-max-widescreen is-fluid'>
                    <nav className="breadcrumb has-succeeds-separator">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li className="is-active"><a href="#" aria-current="page">{product.title}</a></li>
                        </ul>
                    </nav>



                    <div className="columns">
                        <div className="column is-6">
                            <div className='figure'>
                                <img className='imgProducts' src={product.productImgs[1]} />
                            </div>
                        </div>
                        <div className="column">
                            <h1 className="is-size-2">{product.title}</h1>
                            <h2 className="is-size-3"><span>$ {product.price}</span> </h2> <hr /> <div><div className="field mb-2">


                                <div className="control">
                                    <div>
                                        {/* <!-- Quantity --> */}
                                        <div className="product-quantity">
                                            <div className="heading">Quantity</div>
                                            <div className='addContainer is-flex'>
                                                <button onClick={()=> setQty(qty -1)} className='button'><i className="fa-solid fa-minus"></i></button>
                                                <span className='px-2'> <p className='title'>{qty}</p> </span>
                                                <button onClick={()=> setQty(qty +1)} className='button'><i className="fa-solid fa-plus"></i></button>


                                            </div>
                                            <div className="container is-1 is-flex">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> <hr />
                            </div> <button onClick={()=> addCart(qty, id)} className="button is-danger is-fullwidth">Add to cart</button> <hr />

                            <div><p>{product.description}</p>
                            </div> <hr /> <div className="share-buttons level">
                                <div className="level-left">
                                    <p className="level-item">Share: </p>
                                    <a href="https://www.facebook.com/"
                                        target="_blank"
                                        className="level-item has-text-dark">
                                        <i className="fab fa-facebook-square fa-2x"></i></a>
                                    <a href="https://twitter.com/"
                                        target="_blank"
                                        className="level-item has-text-dark">
                                        <i className="fab fa-twitter-square fa-2x"></i></a>
                                    <a href="https://pinterest.com/"
                                        target="_blank"
                                        className="level-item has-text-dark">
                                        <i className="fab fa-pinterest-square fa-2x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/* productos relacionados */}
<section>
    <h1 className='title'>Related Products</h1>
<div className='columns is-multiline'>
                        {
                            relatedProducts.map(item => {
                                    if(item.id == id ) {
                                return } 
                                    else {
                                    return (
                                
                                <div key={item.id} className='column is-3'>
                                <div className="card">
                                   <Link to={`/product/${item.id}`}>
                                    <div className="card-image is-clickable">
                                        <figure className='image is-3by2'>
                                            <img src={item.productImgs[0]} alt="image-producto" />
                                        </figure>
                                        
                                    </div>
                                   </Link>
                                    <div className="card-content">
                                        <div className="media-content">
                                            <p className="title is-4">{item.title}</p>
                                            <p className='subtitle is-6'>Price: {item.price} </p>
                                        </div>
                                        <div>
                                            <footer className='card-footer'>
                                                <p className='card-footer-item is-size-7'>
                                                <button onClick={()=> addCart(1, item.id)} className="button is-danger is-fullwidth">Add to cart</button> 
                                                    </p>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            )}})
                        }
                           
{/* fin productos relacionados */}

                    </div>

</section>

            </div>
            </>}
        </div>
    );
};

export default Product;