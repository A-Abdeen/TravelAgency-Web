import React from "react";
import UpdateButton from "../buttons/UpdateButton";
import { FlightCard, Table } from "../../styles";
// Change from and to , make them display airport name instead of id
const FlightItem = ({ flight }) => {
  return (
    <FlightCard className="card w-75">
      <div class="card-body">
        <Table>
          <tr>
            From:<td>{flight.originId}</td>
            To:<td>{flight.destinationId}</td>
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
