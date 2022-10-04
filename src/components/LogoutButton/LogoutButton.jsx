import React from 'react';

const LogoutButton = () => {

    const logout = ()=> {
        localStorage.setItem("token", "");
    }
    return (
        
        <button onClick={logout} className="button is-danger">
            Logout
        </button>
        
    );
};

export default LogoutButton;