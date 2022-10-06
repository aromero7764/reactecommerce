import axios from 'axios';
import React from 'react';
import { Card } from 'react-bulma-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import getConfig from '../../utils/getConfig';
import Cart from '../Cart/Cart';
import NavBarUser from '../NavBar/NavBarUser';

const PurchasesCard = () => {

const navigate = useNavigate()
const {register, handleSubmit} = useForm()

const submit = (data) => {

    axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", data, getConfig() )
        .then(res => navigate("/purchases"))
        .catch(error => alert("something is wrong, Please check the information provided is complete"))
}



/* necesito 
"street": "Green St. 1456",
"colony": "Southwest",
"zipCode": 12345,
"city": "USA",
"references": "Some references" 
*/

    return (
        <div>
            <NavBarUser />
        
            <div className="container is-fluid is-max-desktop mt-5">
                <h1 className='subtitle has-text-link-dark'>Please enter the following information to process your order!</h1>
                <div className="columns wrap mt-4">
                    <div className="main column is-6">
                    
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Contact Info</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded has-icons-left">
                                        <input className="input" type="text" placeholder="Name" />
                                        
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control is-expanded has-icons-left has-icons-right">
                                        <input className="input is-success" type="email" placeholder="Email"/>
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Street</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-danger" type="text" placeholder="e.g. Barranca"
                                         {...register("street")}/>
                                    </div>
                                    <p className="help is-danger">
                                        This field is required
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Colony</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-danger" type="text" placeholder="e.g. Ciudadela"
                                        {...register("colony")} />
                                    </div>
                                    <p className="help is-danger">
                                        This field is required
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label"></label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded has-icons-left">
                                        <input className="input" type="number" placeholder="Zip Code"
                                        {...register("zipCode")}
                                        />
                                        
                                        <span className="icon is-small is-left">
                                        <i className="fa-brands fa-nfc-directional"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control is-expanded has-icons-left has-icons-right">
                                        <input className="input is-success" type="text" placeholder="city"
                                        {...register("city")} />
                                        <span className="icon is-small is-left">
                                        <i className="fa-solid fa-city"></i>
                                        </span>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">Reference</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <textarea className="textarea" placeholder="Explain how we may go to your direction"
                                        {...register("references")}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="field is-horizontal">
                            <div className="field-label">
                                {/* <!-- Left empty for spacing --> */}
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control">
                                        <button onClick={handleSubmit(submit)} className="button is-primary">
                                            Place Your Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
                <aside className="sidebar is-4">
                    <Cart ishidden={"is-hidden"}/>
                </aside>
            </div>



        </div>


        </div>
    );
};

export default PurchasesCard;