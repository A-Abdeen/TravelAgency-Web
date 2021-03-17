// Check ID and Gender fields

import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useDispatch } from "react-redux";
import { addPassenger } from "../../store/actions/bookingActions";
import { BForm, AddFlight } from "../../styles";

const PassengerForm = () => {
  const dispatch = useDispatch();
  const [passenger, setPassenger] = useState({
    title: "",
    firstName: "",
    lastName: "",
    gender: "",
    passportNum: "",
    countryIssue: "",
    expiryDate: "",
    nationality: "",
  });

  const handleChange = (event) =>
    setPassenger({ ...passenger, [event.target.name]: event.target.value });

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addPassenger(passenger));
  };

  return (
    <div>
      <BForm onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-5">
            <select
              id="title"
              name="title"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">(Choose Title)</option>
              <option value="mr">Mr.</option>
              <option value="ms">Ms.</option>
              <option value="mrs">Mrs.</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">FirstName</label>
            <input
              value={passenger.firstName}
              type="text"
              name="firstName"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">LastName</label>
            <input
              value={passenger.lastName}
              type="text"
              name="lastName"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Gender</label>
            <select
              id="gender"
              name="gender"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">(Choose)</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="col-md-5">
          <label className="form-label">Nationality</label>
          <select
            id="nationality"
            name="nationality"
            className="form-control"
            onChange={handleChange}
          >
            <option value="">(Choose)</option>
            <option value="Bahrain">Bahraini</option>
            <option value="Kuwait">Kuwaiti</option>
            <option value="Oman">Omani</option>
            <option value="Emarati">Emarati</option>
          </select>
        </div>
        {/* <div className="row">
          <div className="col-md-6">
            <label className="form-label">Nationality</label>
            <Select
              options={options}
              value={passenger.nationality}
              onChange={changeHandler}
              id="nationality"
              name="nationality"
            />
          </div>
        </div> */}
        <div className="row">
          <div className="col-md-3">
            <label className="form-label">Passpost Number</label>
            <input
              value={passenger.passportNum}
              type="integer"
              name="passportNum"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Country of Passport Issue</label>
            <select
              id="countryIssue"
              name="countryIssue"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">(Choose)</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Oman">Oman</option>
              <option value="Emarati">Emarati</option>
            </select>
          </div>

          {/* <div className="col-md-3">
            <label className="form-label">Country Issue</label>
            <input
              value={passenger.countryIssue}
              type="text"
              name="countryIssue"
              className="form-control"
              onChange={handleChange}
            />
          </div> */}
          <div className="col-md-5">
            <label className="form-label">Expiry Date</label>
            <input
              value={passenger.expiryDate}
              type="date"
              name="expiryDate"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <AddFlight type="submit" className="btn btn float-right">
          Next
        </AddFlight>
      </BForm>
    </div>
  );
};
export default PassengerForm;
