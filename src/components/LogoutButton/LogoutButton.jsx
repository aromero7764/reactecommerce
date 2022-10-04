import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const logout = ()=> {
        localStorage.setItem("token", "");
        navigate("/")
    }
    return (
        
        <button onClick={logout} className="button is-danger">
            Logout
        </button>
        
    );
};

export default LogoutButton;