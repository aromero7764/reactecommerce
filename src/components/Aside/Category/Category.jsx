import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryThunk, setCategory } from '../../../store/slices/category.slice';

const Category = () => {

    const dispatch = useDispatch()
    const [categories, setCategoryes] = useState([])
    /* const categories = useSelector((state) => state.category) */
    

useEffect(()=> {
    
    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
        .then(res => setCategoryes(res.data.data.categories))
},[])

    return (

        <div>
            <p className="menu-label">
                Category
            </p>
            <ul className="menu-list">
                {
                    categories.map(category => (
                        <li key={category.id}><a>{category.name}</a></li>
                    ))
                }
          
            </ul>
        </div>
    );
};

export default Category;