//WIP
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { BForm, AddFlight } from "../../styles";

const PassengerForm = () => {
  const [booking, setBooking] = useState({
    title: "",
    departureTime: "",
    firstName: "",
    lastName: "",
    gender: "",
    passportNum: "",
    countryIssue: "",
    expiryDate: "",
  });

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div>
      <BForm>
        <div className="row">
          <div className="col-md-5">
            <label className="form-label">Title</label>
            <select id="title" name="title" className="form-control">
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
            <label className="form-label">LastName</label>
            <input type="text" name="lastName" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Gender</label>
            <select id="gender" name="gender" className="form-control">
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
            <label className="form-label">Country Issue</label>
            <input type="text" name="countryIssue" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Expiry Date</label>
            <input type="date" name="expiryDate" className="form-control" />
          </div>
        </div>
        <AddFlight type="submit" className="btn btn float-right">
          Book
        </AddFlight>
      </BForm>
    </div>
  );
};
export default PassengerForm;
