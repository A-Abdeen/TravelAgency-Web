// WIP
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BForm, FormTitle, AddFlight } from "../../styles";
import { addBooking } from "../../store/actions/bookingActions";
import { useHistory } from "react-router-dom";

//Components
// import { bookingFlight } from "../../store/actions/flightActions";

const ContactForm = ({ flightId }) => {
  const dispatch = useDispatch();
  const passengers = useSelector((state) => state.bookingReaducer.passengers);
  const history = useHistory();

  const [booking, setBooking] = useState({
    flightIds: flightId,
    fullName: "",
    email: "",
    countryCode: "",
    phone: "",
  });

  const handleChange = (event) =>
    setBooking({ ...booking, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newbooking = { ...booking, passengers: [passengers] };
    dispatch(addBooking(newbooking));
    history.push("/");
    window.alert("Thank You for your Reservation");
  };

  return (
    <div>
      <BForm onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              value={booking.fullName}
              type="text"
              name="fullName"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Contact Email</label>
            <input
              value={booking.email}
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <select
              id="countryCode"
              name="countryCode"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">(country code)</option>
              <option value="+973">Bahrain +973</option>
              <option value="+965"> Kuwait +965</option>
              <option value="+968"> Oman +968</option>
              <option value="+971"> UAE +971</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Contact Number</label>
            <input
              value={booking.phone}
              type="text"
              name="phone"
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
