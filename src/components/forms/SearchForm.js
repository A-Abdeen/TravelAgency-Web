import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { MdFlightTakeoff } from "react-icons/md";
import { searchFlights } from "../../store/actions/flightActions";
import { SearchButton, SearchFlight, SearchBox } from "../../styles";

const FlightSearch = () => {
  const dispatch = useDispatch();

  const origin = useSelector((state) => state.locationReducer.origins);

  const originList = origin.map((origin) => (
    <option value={`${origin.id}`}>{origin.airportName}</option>
  ));

  const destination = useSelector(
    (state) => state.locationReducer.destinations
  );
  const destinationList = destination.map((destination) => (
    <option value={`${destination.id}`}>{destination.airportName}</option>
  ));

  let [flight, setFlight] = useState({
    originId: "",
    destinationId: "",
    departureDate: "",
    arrivalDate: "",
    seats: "",
    class: "",
  });

  const handleChange = (event) =>
    setFlight({ ...flight, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchFlights(flight));
  };

  // Add condition to show return date only on roundtrips radiobutton
  return (
    <div className="row">
      <div className="col-md-12">
        <SearchBox className="mt-5">
          <SearchFlight className="tabbable">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <MdFlightTakeoff /> Find Your Perfect Trip{" "}
              </li>
            </ul>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="trip"
                    value="oneway"
                    className="form-check-input"
                    onChange={handleChange}
                  />
                  <label className="form-check-label">One way</label>
                </div>
                <div className="col-md-2">
                  <input
                    type="radio"
                    name="trip"
                    value="roundTrip"
                    className="form-check-input"
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Round Trip</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group form-group-lg form-group-icon-left">
                    <i className="fa fa-map-marker input-icon"></i>
                    <label>From</label>
                    <select
                      id="originId"
                      name="originId"
                      className="form-control"
                      onChange={handleChange}
                      value={flight.originId}
                    >
                      <option value="">Choose Origin</option>
                      {originList}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group form-group-lg form-group-icon-left">
                    <i className="fa fa-map-marker input-icon"></i>
                    <label>To</label>
                    <select
                      id="destinationId"
                      name="destinationId"
                      className="form-control"
                      onChange={handleChange}
                      value={flight.destinationId}
                    >
                      <option value="">Choose Destination</option>
                      {destinationList}
                    </select>
                  </div>
                </div>
              </div>{" "}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group form-group-lg">
                    <label>Departure</label>
                    <input
                      type="date"
                      value={flight.departureDate}
                      onChange={handleChange}
                      name="departureDate"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group form-group-lg">
                    <label>Return</label>
                    <input
                      type="date"
                      value={flight.arrivalDate}
                      onChange={handleChange}
                      name="arrivalDate"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="form-group form-group-lg">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="class"
                      value="economySeats"
                      onChange={handleChange}
                    />
                    <label className="form-check-label"> Economy Class</label>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group form-group-lg">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="class"
                      value="businessSeats"
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Business Class</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group form-group-lg">
                    <label>Number of Passengers</label>
                    <input
                      type="number"
                      value={flight.seats}
                      onChange={handleChange}
                      name="seats"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <SearchButton className="btn btn-lg" type="submit">
                Search for Flights
              </SearchButton>
            </form>
          </SearchFlight>
        </SearchBox>
      </div>
    </div>
  );
};
export default FlightSearch;
