import React from 'react';
import { useNavigate } from 'react-router-dom';

const PurchasesButton = () => {
    const navigate = useNavigate()


    const goToPurchases = () => {
        navigate("/purchases")
    }


    return (
        <a onClick={goToPurchases} className="button is-light">
                                <strong>Purchases</strong>
                            </a>
    );
};

export default PurchasesButton;