//React
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//Styling
import { BForm, FormTitle, AddFlight } from "../../styles";

import { addBooking } from "../../store/actions/bookingActions";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [booking, setBooking] = useState({
    flightIds: [
      {
        flightId: 1,
        passenger: 2,
      },
      {
        flightId: 2,
        passenger: 2,
      },
    ],
    fullName: "",
    email: "",
    countryCode: "",
    phone: "",
  });
  const passengers = useSelector((state) => state.bookingReducer.passengers);

  const handleChange = (event) =>
    setBooking({ ...booking, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    //useselector
    //swich the passenger and contact form
    const newbooking = { ...booking, passengers: passengers };
    dispatch(addBooking(booking));
  };

  console.log("contactBoooking", booking);

  return (
    <div>
      <BForm onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={booking.fullName}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="email"
              value={booking.email}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="form-label">Code</label>
            <select
              id="code"
              name="code"
              value={booking.code}
              className="form-control"
              onChange={handleChange}
            >
              <option value="">code</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Phone.No</label>
            <input
              type="text"
              name="phone"
              value={booking.phone}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>

        <AddFlight type="submit" className="btn btn float-right">
          Continue
        </AddFlight>
      </BForm>
    </div>
  );
};
export default ContactForm;
