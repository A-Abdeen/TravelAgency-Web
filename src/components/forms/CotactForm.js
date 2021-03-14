//React
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
//Styling
import { BForm, FormTitle, AddFlight } from "../../styles";

//Components
// import { bookingFlight } from "../../store/actions/flightActions";

const ContactForm = () => {
  const [booking, setBooking] = useState(
     {
      email: "",
      countryCode: "",
      phone: "",
    }
  );

//   const handleSubmit = (event) => {
//     event.preventDefault();
//       dispatch(bookFlight(flight));
//       history.push("");
//     };

  return (
    <div>
      <BForm>
    <div className="row">
    <div className="col-md-6">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
        />
        </div>
        </div>
        <div className="row">
        <div className="col-md-3">
        <label className="form-label">Code</label>
        <select
              id="code"
              name="code"
              className="form-control"
            >
              <option value="">code</option>
            </select>
          </div>
          <div className="col-md-3">
         <label className="form-label">Phone.No</label>
        <input
          type="text"
          name="phone"
          className="form-control"
        />
      </div>
      </div>

        <AddFlight type="submit" className="btn btn float-right">
          Continue
        </AddFlight>
      </BForm>
    </div>
  );
  }
export default ContactForm;
