import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchesesThunk } from '../../store/slices/purchases.slice';
import LogoutButton from '../LogoutButton/LogoutButton';
import NavBarUser from '../NavBar/NavBarUser';



const Purchases = () => {

    const [isVisible, setisVisible] = useState(false)

    const purchases = useSelector( state => state.purchases)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getPurchesesThunk())

    }, [])




console.log(purchases)

    return (

        <div>
            <NavBarUser />

            <div className='container is-max-desktop is-fluid mt-5'>
                <p className='title'>These are your purchases</p>
            {
                purchases.map(item => (
                     <article key={item.id} className="message is-link">
                <div className="message-header">
                    <p>{item.createdAt}</p>
                    <button className="delete" aria-label="delete" onClick={()=> setisVisible(!isVisible)}></button>
                </div>
                <div className={`message-body ${(isVisible) && "is-hidden"}`}>
                    {item.cart.products.map(purchase => (
                          <p key={purchase.title}>{purchase.title} <span>{purchase.price}</span> <span>{purchase.quantity}</span></p>
                    )

                    )
                    
                    }
                </div>
            </article>
                ))
            }
           </div>
        </div>
    );
};

export default Purchases;