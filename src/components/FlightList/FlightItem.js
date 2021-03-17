import React from "react";
import UpdateButton from "../buttons/UpdateButton";
import { FlightCard, Table } from "../../styles";
import { useSelector } from "react-redux";

// Change from and to , make them display airport name instead of id
const FlightItem = ({ flight }) => {
  const origin = useSelector((state) => state.locationReducer.origins);
  const destination = useSelector(
    (state) => state.locationReducer.destinations
  );

  const foundOrigin = origin.find((origin) => origin.id === flight.originId);
  const foundDestination = destination.find(
    (destination) => destination.id === flight.destinationId
  );

  // console.log(foundOrigin);
  // console.log(origin);
  return (
    <FlightCard className="card w-75">
      <div class="card-body">
        <Table>
          <tr>
            From:<td>{foundOrigin.airportName}</td>
            To:<td>{foundDestination.airportName}</td>
          </tr>
          <tr>
            DepartureDate:
            <td>
              {flight.departureDate}, {flight.departureTime}
            </td>
            ArrivalDate:
            <td>
              {flight.arrivalDate}, {flight.arrivalTime}
            </td>
          </tr>
          <tr>
            EconomySeats:<td>{flight.economySeats}</td>
            EconomyPrice:<td>BHD {flight.economyPrice}</td>
          </tr>
          <tr>
            BusinessSeats:<td>{flight.businessSeats}</td>
            BusinessPrice:<td>BHD {flight.businessPrice}</td>
          </tr>
        </Table>
        <UpdateButton flight={flight} />
      </div>
    </FlightCard>
  );
};

export default FlightItem;
