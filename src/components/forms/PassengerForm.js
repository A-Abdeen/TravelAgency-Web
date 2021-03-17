//React
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useDispatch } from "react-redux";
import { addPassenger } from "../../store/actions/bookingActions";

//Styling
import { BForm, AddFlight } from "../../styles";

const PassengerForm = ({ flight }) => {
  const dispatch = useDispatch();
  const [passenger, setPassenger] = useState({
    title: "",
    firstName: "",
    lastName: "",
    gender: "",
    passportNum: "",
    countryIssue: "",
    expiryDate: "",
  });

  const handleChange = (event) =>
    setPassenger({ ...passenger, [event.target.name]: event.target.value });

  console.log(passenger);

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
            <label className="form-label">Title</label>
            <select
              id="title"
              name="title"
              value={passenger.title}
              className="form-control"
              onChange={handleChange}
            >
              <option value="mr">Mr.</option>
              <option value="ms">Ms.</option>
              <option value="mrs">Mrs.</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="form-label">FirstName</label>
            <input type="text" name="firstName" className="form-control" />
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
              value={passenger.gender}
              id="gender"
              name="gender"
              className="form-control"
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">female</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Nationality</label>
            <Select options={options} value={value} onChange={changeHandler} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="form-label">Passpost No.</label>
            <input type="text" name="passportNum" className="form-control" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Passpost No.</label>
            <input
              value={passenger.passportNum}
              type="text"
              name="passportNum"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Country Issue</label>
            <input
              value={passenger.countryIssue}
              type="text"
              name="countryIssue"
              className="form-control"
              onChange={handleChange}
            />
          </div>
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
          Confirm
        </AddFlight>
      </BForm>
    </div>
  );
};
export default PassengerForm;
