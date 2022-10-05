import { UNSAFE_convertRoutesToDataRoutes } from '@remix-run/router';
import React, { useEffect, useState } from 'react';
import NavBarUser from '../NavBar/NavBarUser';
import './Product.css'

const Product = () => {


  

    return (
        <div>
            <NavBarUser />
            <div className="someSpace">
                <span></span>
            </div>
            <nav className="breadcrumb has-succeeds-separator">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li className="is-active"><a href="#" aria-current="page">Titulo Producto</a></li>
                </ul>
            </nav>

             <div>
                <div class="columns">
                    <div class="column is-7">
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0585/5304/1077/products/casual-fashion-woman_925x_c4fbb5a2-7261-4653-9ffd-48921406d13c.jpg?v=1626648858"/>
                        </div>
                    </div> 
                <div class="column">
                    <h1 class="is-size-2">Classic Varsity Top</h1> 
                    <h2 class="is-size-3"><span>$60.00</span> </h2> <hr/> <div><div class="field mb-2">
                        
                    <label for="product_option_qty" class="label">Quantity
                    </label>
                    
                    <div class="control">
                        <div>
                            {/* <!-- Quantity --> */}
                        <div class="product-quantity">
                            <div class="heading">Quantity</div>
                            <div data-trigger="spinner" class="details-spinner">
                                <input class="hidden-spinner" type="hidden" value="1" data-spin="spinner" data-rule="quantity" data-min="1" data-max="99"/>
                                <a class="spinner-button is-remove" href="javascript:;" data-spin="down">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </a>
                                <span class="spinner-value">1</span>
                                <a class="spinner-button is-add" href="javascript:;" data-spin="up">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </a>
                            </div>
                            <div class="control is-hidden">
                                <input class="input is-rounded" type="number" value="1"/>
                            </div>
                        </div>
                        </div>

                    </div>
                </div> <hr/>
            </div> <button class="button is-dark is-fullwidth">Add to cart</button> <hr/> 
            
            <div><p>Womens casual varsity top, This grey and black buttoned top is a sport-inspired piece complete with an embroidered letter.</p>
            </div> <hr/> <div class="share-buttons level">
                <div class="level-left">
                    <p class="level-item">Share: </p> 
                    <a href="https://www.facebook.com/sharer.php?u=https://tinystore.app//tinystore-development/products/classic-varsity-top" 
                            target="_blank" 
                            class="level-item has-text-dark">
                                <i class="fab fa-facebook-square fa-2x"></i></a>
                     <a href="https://twitter.com/home?status=https://tinystore.app//tinystore-development/products/classic-varsity-top" 
                            target="_blank" 
                            class="level-item has-text-dark">
                                <i class="fab fa-twitter-square fa-2x"></i></a>
                     <a href="https://pinterest.com/pin/create/button/?url==https://tinystore.app//tinystore-development/products/classic-varsity-top&amp;media=https://cdn.shopify.com/s/files/1/0585/5304/1077/products/casual-fashion-woman_925x_c4fbb5a2-7261-4653-9ffd-48921406d13c.jpg?v=1626648858" 
                            target="_blank" 
                            class="level-item has-text-dark">
                                <i class="fab fa-pinterest-square fa-2x"></i></a>
            </div></div></div></div></div> 

            

            
        
    </div>
    );
};

export default Product;