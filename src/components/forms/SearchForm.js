import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {MdFlightTakeoff} from "react-icons/md";

import {SearchButton, SearchFlight, SearchBox, TripButton} from "../../styles";

const FlightSearch = () => {
const dispatch = useDispatch();
  const { flightId, airlineId } = useParams();
  const foundFlight = useSelector((state) =>
    state.flightReducer.flights.find((flight) => flight.id === +flightId)
  );

  const [flight, setFlight] = useState(
    foundFlight ?? {
      airlineId: airlineId,
      originId:"",
      destinationId:"",
      departureDate: "",
      arrivalDate: "",
      departureTime:"",
      arrivalTime:"",
      economySeats: 0,
      economyPrice: 0,
      businessSeats: 0,
      businessPrice: 0,
    }
  );

const origin = useSelector((state) => state.locationReducer.origins);
const destination = useSelector((state) => state.locationReducer.destinations);

const handleChange = (event) =>
    setFlight({ ...flight, [event.target.name]: event.target.value });
const originList = origin.map((origin)=>
   <option value={`${origin.id}`}>{origin.airportName}</option>);

   const destinationList = destination.map((destination)=>
   <option value={`${destination.id}`}>{destination.airportName}</option>);


    return (
    <div className="row">
    <div className="col-md-12">
        <SearchBox className="mt-5">
            <SearchFlight className="tabbable">
                <ul className="nav nav-tabs" >
                    <li className="nav-item">
                        <MdFlightTakeoff/> Find Your Perfect Trip </li>
                </ul>
                <form>
                <div className="row">
                <div className="col-md-1">
                <input type="button" id="oneWay" name="trip" value="one Way" className="btn btn-danger"/>
                </div>
                <div className="col-md-1">
                <input type="button" id="roundTrip" name="trip" value="round Trip" className="btn btn-secondary"/>
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
                        value={flight.originId}>
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
                        value={flight.destinationId}>
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
                <div className="col-md-6">
                    <div className="form-group form-group-lg">
                        <label>Passengers on Economy</label>
                        <input
                        type="number"
                        value={flight.economySeats}
                        onChange={handleChange}
                        name="economySeats"
                        className="form-control"
                    />
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group form-group-lg">
                        <label>Passengers on Business</label>
                        <input
                        type="number"
                        value={flight.businessSeats}
                        onChange={handleChange}
                        name="businessSeats"
                        className="form-control"
                       />
                    </div>
                    </div>
                    </div>
                    </div>
            <SearchButton className="btn btn-lg" type="button">Search for Flights</SearchButton>
        </form>
    </SearchFlight>
                </SearchBox>
        </div>
        </div>
);
};
    export default FlightSearch;