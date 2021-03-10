//React
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
//Styling
import { Form, FormTitle, Button, FormItem } from "../../styles";

//Components
import { addFlight, updateFlight } from "../../store/actions/flightActions";

const FlightForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { flightId, airlineId } = useParams();
  const foundFlight = useSelector((state) =>
    state.flightReducer.flights.find((flight) => flight.id === flightId)
  );

  console.log(useSelector((state) => state.flightReducer.flights));
  console.log(foundFlight);

  const [flight, setFlight] = useState(
    foundFlight || {
      airlineId: airlineId,
      departureDate: "",
      arrivalDate: "",
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
    if (foundFlight) dispatch(updateFlight(flight));
    else dispatch(addFlight(flight));
    history.push("/flights");
  };

  return (
    <div>
      <FormTitle>{foundFlight ? "Edit" : "Add"} Flight</FormTitle>
      <Form className="row g-3" onSubmit={handleSubmit}>
        <FormItem className="col-auto">
          <input
            placeholder="Departure Date"
            type="datetime-local"
            value={flight.departureDate}
            onChange={handleChange}
            name="departureDate"
            className="form-control"
          />
        </FormItem>
        <FormItem className="col-auto">
          <input
            placeholder="Arrival Date"
            type="datetime-local"
            value={flight.arrivalDate}
            onChange={handleChange}
            name="arrivalDate"
            className="form-control"
          />
        </FormItem>
        <FormItem className="col-auto">
          <input
            placeholder="Economy Seats"
            type="number"
            value={flight.economySeats}
            onChange={handleChange}
            name="economySeats"
            className="form-control"
          />
        </FormItem>
        <FormItem className="col-auto">
          <input
            placeholder="Economy Price"
            type="number"
            value={flight.economyPrice}
            onChange={handleChange}
            name="economyPrice"
            className="form-control"
          />
        </FormItem>
        <div className="col-auto">
          <input
            placeholder="Business Seats"
            type="number"
            value={flight.businessSeats}
            onChange={handleChange}
            name="businessSeats"
            className="form-control"
          />
        </div>
        <div className="col-auto">
          <input
            placeholder="Business Price"
            type="number"
            value={flight.businessPrice}
            onChange={handleChange}
            name="businessPrice"
            className="form-control"
          />
        </div>
        <Button type="submit" className="btn btn-info float-right">
          {foundFlight ? "Edit" : "Add"}
        </Button>
      </Form>
    </div>
  );
};

export default FlightForm;
