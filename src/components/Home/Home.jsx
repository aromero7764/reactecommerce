import React from 'react';
import Category from '../Aside/Category/Category';
import Price from '../Aside/Price';
import Login from '../Login/Login';
import NavBarUser from '../NavBar/NavBarUser';
import SearchBar from '../SearchBar/SearchBar';



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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore nihil deserunt maxime repudiandae sint distinctio consequuntur explicabo quaerat in et eaque ducimus qui dolor, ratione delectus quos veniam ad.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;