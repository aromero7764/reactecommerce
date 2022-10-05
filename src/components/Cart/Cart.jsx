import React from 'react';
import 'bulma-list/css/bulma-list.css'
/* import './Cart.css' */

const Cart = () => {


    return (
        <aside>
            <div className="box" id="cart" data-example>
                <h1 className="title is-4 mb-2">Cart</h1>

                <div className="list has-visible-pointer-controls">
                    <div className="list-item">
                        <div className="list-item-image">
                            <figure className="image is-48x48">
                                <img src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80" alt="Gameboy" />
                            </figure>
                        </div>

                        <div className="list-item-content">
                            <div className="list-item-title">Yellow Gameboy</div>
                        </div>

                        <div className="list-item-controls">
                            <div className="is-flex is-align-items-center">
                                <span>$35.00</span>

                                <div className="control ml-3 is-hidden-mobile">
                                  {/*  { <input className="input" type="number"  style="width: 7ch" />} */}
                                </div>

                                <div className="buttons ml-3">
                                    <button className="button is-hidden-mobile">
                                        <span className="icon">
                                            <i className="fas fa-sync-alt"></i>
                                        </span>
                                        <span>Update</span>
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

                    <div className="list-item">
                        <div className="list-item-image">
                            <figure className="image is-48x48">
                                <img src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2360&q=80" alt="Little toy car" />
                            </figure>
                        </div>

                        <div className="list-item-content">
                            <div className="list-item-title">Little toy car</div>
                        </div>

                        <div className="list-item-controls">
                            <div className="is-flex is-align-items-center">
                                <span>$25.00</span>

                                <div className="control ml-3 is-hidden-mobile">
                                   {/*  <input className="input" type="number"  style="width: 7ch" /> */}
                                </div>

                                <div className="buttons ml-3">
                                    <button className="button is-hidden-mobile">
                                        <span className="icon">
                                            <i className="fas fa-sync-alt"></i>
                                        </span>
                                        <span>Update</span>
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

                    <div className="list-item">
                        <div className="list-item-image">
                            <figure className="image is-48x48">
                                <img src="https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80" alt="Sunglasses" />
                            </figure>
                        </div>

                        <div className="list-item-content">
                            <div className="list-item-title">Some random sunglasses</div>
                        </div>

                        <div className="list-item-controls">
                            <div className="is-flex is-align-items-center">
                                <span>$70.00</span>

                                <div className="control ml-3 is-hidden-mobile">
                                    {/* <input className="input" type="number"  style="width: 7ch" /> */}
                                </div>

                                <div className="buttons ml-3">
                                    <button className="button is-hidden-mobile">
                                        <span className="icon">
                                            <i className="fas fa-sync-alt"></i>
                                        </span>
                                        <span>Update</span>
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
                    
                </div>
               
            </div> 
</aside>
    );
};

export default Cart;