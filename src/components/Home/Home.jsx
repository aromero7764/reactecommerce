import React from 'react';
import Category from '../Aside/Category/Category';
import Price from '../Aside/Price';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import NavBarUser from '../NavBar/NavBarUser';
import ProductsHome from '../ProductsHome/ProductsHome';
import SearchBar from '../SearchBar/SearchBar';
import ShoppingCardButton from '../ShoppingCardButton/ShoppingCardButton';



const Home = () => {
    return (
        <div>
            <NavBarUser/>
            
            <div className="mb-6">
                <span></span>
            </div>

            <div className="columns mt-6">

                <div className="column is-one-fifth">
                    {/* this is aside */}
                    <aside className="menu mt-4">
                        <Price />
                        <Category />
                    </aside>
                </div>
                <div className="column is-9">

                    <div className="block mt-6">
                        <SearchBar />

                        {/* Listar todos los productos */}
                        <div className="column">

                            <div>
                                
                               <ProductsHome />
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;