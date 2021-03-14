import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { MdFlightTakeoff } from "react-icons/md";

import {
  SearchButton,
  SearchFlight,
  SearchBox,
} from "../../styles";

const FlightSearch = () => {
  const dispatch = useDispatch();
  const { flightId, airlineId } = useParams();
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
      class :"",
      seats: 0,
      
    }
  );

  const origin = useSelector((state) => state.locationReducer.origins);
  const destination = useSelector(
    (state) => state.locationReducer.destinations
  );

  const handleChange = (event) =>
    setFlight({ ...flight, [event.target.name]: event.target.value });
  const originList = origin.map((origin) => (
    <option value={`${origin.id}`}>{origin.airportName}</option>
  ));

  const destinationList = destination.map((destination) => (
    <option value={`${destination.id}`}>{destination.airportName}</option>
  ));

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
            <form>
              <div className="row">
                <div className="col-md-1">
                  <input
                    type="radio"
                    id="oneWay"
                    name="trip"
                    value="one Way"
                    className="btn btn-danger"
                  />
                   <label>One way</label>

                </div>
                <div className="col-md-1">
                  <input
                    type="radio"
                    id="roundTrip"
                    name="trip"
                    value="round Trip"
                    className="btn btn-secondary"
                  />
                <label>Round Trip</label>

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
                      <option value="">airportName</option>
                      {originList}
                    </select>
                  </div>
                </div>
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
                      <option value="">airportName</option>
                      {destinationList}
                    </select>
                  </div>
                </div>
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
                <div className="col-md-4">
                    <div className="form-group form-group-lg">
                    <input type="radio" id="economy" name="class" value="economy"/>
                    <label> Economy Class</label>
                    </div>
                    </div> 
                    <div className="col-md-4"> 
                     <div className="form-group form-group-lg">
                <input type="radio" id="bussines" name="class" value="bussines"/>
                <label for="female"> Bussines Class</label>
                   </div>
                    </div>
        
                        <div className="col-md-3">
                    <div className="form-group form-group-lg">
                        <label>Number of Passengers</label>
                        <input
                        type="number"
                        value={flight.seats}
                        onChange={handleChange}
                        name="Seats"
                        className="form-control"
                       />
                    </div>
                    </div>
                    </div>
                    </div>
              <SearchButton className="btn btn-lg" type="button">
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
