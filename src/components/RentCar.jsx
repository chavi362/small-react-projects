import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaPhone, FaEmail } from 'react-icons/fa';
const RentCar = () => {
    const [rentData, setRentData] = React.useState(
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
    function handleChange(event) {
        console.log(event)
        const { name, value, } = event.target
        setRentData(prevrentData => {
            return {
                ...prevrentData,
                [name]: value
            }
        })
    }
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
                                                <input
                                                    type="text"
                                                    placeholder="First Name"
                                                    onChange={handleChange}
                                                    name="firstName"
                                                    value={rentData.firstName}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Last Name"
                                                    onChange={handleChange}
                                                    name="lastName"
                                                    value={rentData.lastName}
                                                />
                                                <input
                                                    type="number"
                                                    placeholder="telephone"
                                                    onChange={handleChange}
                                                    name="telephone"
                                                    value={rentData.telephone}
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    onChange={handleChange}
                                                    name="email"
                                                    value={rentData.email}
                                                />
                                                <textarea
                                                    value={rentData.specialRequests}
                                                    placeholder="Special Requests"
                                                    onChange={handleChange}
                                                    name="specialRequests"
                                                />
                                                <label for="takingDate"></label>
                                                <input type="datetime-local" id="takingDate" name="takingDate" />
                                                <br />
                                                <label for="returningDate"></label>
                                                <input type="datetime-local" id="returningDate" name="returningDate" />
                                                <br />
                                                <select
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
                                                <button>Submit</button>
                                            </form>
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