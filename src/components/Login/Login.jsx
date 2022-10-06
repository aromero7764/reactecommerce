import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import LogoutButton from '../LogoutButton/LogoutButton';
import './Login.css'


const Login = ({text, style}) => {

    const navigate = useNavigate()

    const {register, handleSubmit} = useForm()

    console.log(style)

    const submit = (data)=> {

        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then(res=> {
                console.log(res.data.data.token)
                localStorage.setItem("token", res.data.data.token)
                navigate("/")
            } )
            
            .catch(error => {
                if(error.response?.status === 404) {
                    alert("credenciales invalidas")
                }
                console.log(error.response)
            })

    }

    return (
        <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        
                        <div className={`column is-5-tablet is-4-desktop is-3-widescreen ${(style) && "nbarButton"}`}>
                            <form onSubmit={handleSubmit(submit)} className="box">
                                <div className="field">
                                <article className="message is-link">
                <div className="message-header">
                   Alert!
                    
                </div>
                <div className="message-body">
                    Plase: {text}
                    <br /> 
                    <b> User:</b> john@gmail.com
                    <b> Pass:</b> john1234
                    <br />
                    
                    

                </div>
            </article>
                                    <label  className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="email" placeholder="e.g. bobsmith@gmail.com" className="input" required
                                        {...register("email")}/>
                                        
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" placeholder="*******" className="input" required
                                        {...register("password")}/>
        
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-lock"></i>
                                            </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label  className="checkbox">
                                        <input type="checkbox"/>
                                            Remember me
                                    </label>
                                </div>
                                <div className="field">
                                    <button className="button is-success">
                                        Login
                                    </button>
                                <LogoutButton />

                                </div>
                                
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;