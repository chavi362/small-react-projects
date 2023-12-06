import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { FaPhone, FaEmail } from 'react-icons/fa';
const RentCar = () => {
    const [rentData, setRentData] =useState(
        {
            firstName: "",
            lastName: "",
            telephone: "",
            email: "",
            takingDate: "",
            returningDate: "",
            specialRequests: "",
            cardType: "",
            cardNumber: "",
            cardEndYear: "",
            cardEndMonth: ""
        }
    )
    const rentalsCountRef = useRef(0);
    const handleChange = (event) => {
        const { name, value, type } = event.target;
        setRentData(prevRentData => ({
            ...prevRentData,
            [name]: type === 'datetime-local' ? new Date(value) : value
        }));
    };
    const handleSubmit = (event) => {
       
        rentalsCountRef.current += 1;
        console.log(rentData);
        console.log("Number of Rentals:", rentalsCountRef.current);
        localStorage.setItem(`rent-number${rentalsCountRef.current}`,JSON.stringify(rentData));
    };
    return (
        <main>
            <section className={"vh-100"} style={{ backgroundColor: '#eee' }}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: '25px' }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <form >
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="mb-3">
                                                    <label htmlFor="firstName" className="form-label">First Name:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="firstName"
                                                        name="firstName"
                                                        minLength="2"
                                                        maxLength="15"
                                                        onChange={handleChange}
                                                        value={rentData.firstName}
                                                        required
                                                    />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="mb-3">
                                                        <input
                                                        className="form-control"
                                                            type="text"
                                                            placeholder="Last Name"
                                                            onChange={handleChange}
                                                            name="lastName"
                                                            value={rentData.lastName}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="mb-3">
                                                        <input
                                                        className="form-control"
                                                            type="number"
                                                            placeholder="telephone"
                                                            onChange={handleChange}
                                                            name="telephone"
                                                            value={rentData.telephone}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="mb-3">
                                                        <input
                                                        className="form-control"
                                                            type="email"
                                                            placeholder="Email"
                                                            onChange={handleChange}
                                                            name="email"
                                                            value={rentData.email}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="mb-3">
                                                        <textarea
                                                        className="form-control"
                                                            value={rentData.specialRequests}
                                                            placeholder="Special Requests"
                                                            onChange={handleChange}
                                                            name="specialRequests"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label htmlFor="takingDate"></label>
                                                        <input className="form-control"type="datetime-local" id="takingDate" name="takingDate" />
                                                        <br />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label htmlFor="returningDate"></label>
                                                        <input className="form-control"type="datetime-local" id="returningDate" name="returningDate" />
                                                        <br />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label htmlFor="cardNumber">Card Number</label>
                                                        <input
                                                            type="number"
                                                            id="cardNumber"
                                                            name="cardNumber"
                                                            className="form-control"
                                                            value={rentData.cardNumber}
                                                            onChange={handleChange}
                                                            minLength={16}
                                                            maxLength={16}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <select
                                                        className="form-select" size="3"
                                                            id="cardType"
                                                            value={rentData.cardType}
                                                            onChange={handleChange}
                                                            name="cardType"
                                                        >
                                                            <option value="visa">Visa</option>
                                                            <option value="yisracart">Yisracat</option>
                                                            <option value="direct">Direct</option>
                                                        </select>
                                                        <br />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label htmlFor="cardExpirationYear">Card Expiration Year</label>
                                                        <input
                                                            type="number"
                                                            id="cardExpirationYear"
                                                            name="cardExpirationYear"
                                                            className="form-control"
                                                            value={rentData.cardExpirationYear}
                                                            onChange={handleChange}
                                                            min={2023}
                                                            max={2045}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label htmlFor="cardExpirationMonth">Card Expiration Month</label>
                                                        <input
                                                            type="number"
                                                            id="cardExpirationMonth"
                                                            name="cardExpirationMonth"
                                                            className="form-control"
                                                            value={rentData.cardExpirationMonth}
                                                            onChange={handleChange}
                                                            min={1}
                                                            max={31}
                                                        />
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="src\assets\images\caption.jpg"
                                                className="img-fluid"
                                                alt="rent a car"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default RentCar