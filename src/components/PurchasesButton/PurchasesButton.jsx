import React from 'react';
import { useNavigate } from 'react-router-dom';

const PurchasesButton = () => {
    const navigate = useNavigate()


    const goToPurchases = () => {
        navigate("/purchases")
    }


    return (
        <button onClick={goToPurchases} className="button is-primary">
            <span  class="icon"> <i className="fa-solid fa-store"> </i></span>
           <span> Purchases</span>
                               
                            </button>
    );
};

export default PurchasesButton;