//React
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

//Styling
import { Form, FormTitle, AddFlight } from "../../styles";

//Components
import { addFlight, updateFlight } from "../../store/actions/flightActions";

const FlightForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { flightId, airlineId } = useParams();
  console.log(flightId);
  const foundFlight = useSelector((state) =>
    state.flightReducer.flights.find((flight) => flight.id === +flightId)
  );

  const [flight, setFlight] = useState(
    foundFlight ?? {
      airlineId: airlineId,
      originId: "",
      destinationId: "",
      departureDate: "",
      arrivalDate: "",
      departureTime: "",
      arrivalTime: "",
      economySeats: 0,
      economyPrice: 0,
      businessSeats: 0,
      businessPrice: 0,
    }
  );

  const handleChange = (event) =>
    setFlight({ ...flight, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundFlight) {
      dispatch(updateFlight(flight));
      history.push(`/airlines/${flight.airlineId}/`);
    } else {
      dispatch(addFlight(flight));

      history.push(`/airlines/${airlineId}/`);
    }
  };
  const origin = useSelector((state) => state.locationReducer.origins);
  const destination = useSelector(
    (state) => state.locationReducer.destinations
  );

  const originList = origin.map((origin) => (
    <option value={`${origin.id}`}>{origin.airportName}</option>
  ));

  const destinationList = destination.map((destination) => (
    <option value={`${destination.id}`}>{destination.airportName}</option>
  ));

  return (
    <div>
      <FormTitle>{foundFlight ? "Edit" : "Add"} Flight</FormTitle>

      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-5">
            <label>From</label>
            <select
              id="originId"
              name="originId"
              onChange={handleChange}
              className="form-control"
              value={flight.originId}
            >
              <option value="">airportName</option>
              {originList}
            </select>
          </div>
          <div className="col-md-5">
            <label>To</label>
            <select
              id="destinationId"
              name="destinationId"
              className="form-control"
              onChange={handleChange}
              value={flight.destinationId}
            >
              <option value="">airportName</option>
              {destinationList}
            </select>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-5">
              <label>Departure Date</label>
              <input
                type="date"
                value={flight.departureDate}
                onChange={handleChange}
                name="departureDate"
                className="form-control"
              />
            </div>
            <div className="col-md-5">
              <label>Arrival Date</label>
              <input
                type="date"
                value={flight.arrivalDate}
                onChange={handleChange}
                name="arrivalDate"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <label>DepartureTime</label>
              <input
                type="time"
                value={flight.departureTime}
                onChange={handleChange}
                name="departureTime"
                className="form-control"
              />
            </div>
            <div className="col-md-5">
              <label>Arrival Time</label>
              <input
                type="time"
                value={flight.arrivalTime}
                onChange={handleChange}
                name="arrivalTime"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <label>Economy Seats</label>
              <input
                type="number"
                value={flight.economySeats}
                onChange={handleChange}
                name="economySeats"
                className="form-control"
              />
            </div>
            <div className="col-md-5">
              <label>Economy Price</label>
              <input
                type="number"
                value={flight.economyPrice}
                onChange={handleChange}
                name="economyPrice"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <label>Business Seats</label>
              <input
                type="number"
                value={flight.businessSeats}
                onChange={handleChange}
                name="businessSeats"
                className="form-control"
              />
            </div>
            <div className="col-md-5">
              <label>Business Price</label>
              <input
                type="number"
                value={flight.businessPrice}
                onChange={handleChange}
                name="businessPrice"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <AddFlight type="submit" className="btn btn float-right">
          {foundFlight ? "Save" : "Add"}
        </AddFlight>
      </Form>
    </div>
  );
};

export default FlightForm;
