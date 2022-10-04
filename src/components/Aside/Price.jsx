import React from 'react';

const Price = () => {
    return (
        <div>
            <p className="menu-label">
                Price
            </p>
            <div className="menu-list">

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">From</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="number" placeholder="Amount" />
                                <span className="icon is-small is-left">
                                    <i className="fa-solid fa-dollar-sign"></i>
                                </span>
                            </p>
                            <p className="help is-danger">
                                This field is required
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">To</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="number" placeholder="Amount" />
                                <span className="icon is-small is-left">
                                    <i className="fa-solid fa-dollar-sign"></i>
                                </span>
                            </p>
                            <p className="help is-danger">
                                This field is required
                            </p>
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
                                <button className="button is-primary">
                                    Filter Price
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            
            </div>


        </div>
    );
};

export default Price;