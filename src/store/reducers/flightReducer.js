import * as types from "../actions/types";

const initialState = {
  flights: [],
  loading: true,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------FETCHING FROM BACKEND
    case types.FETCH_FLIGHT:
      return {
        ...state,
        flights: action.payload,
        loading: false,
      };
    //------------------------------ADDING
    case types.ADD_FLIGHT:
      const { newFlight } = action.payload;

      return {
        ...state,
        flights: [...state.flights, newFlight],
      };

    //------------------------------UPDATING
    case types.UPDATE_FLIGHT:
      const { updatedFlight } = action.payload;
      return {
        ...state,
        flights: state.flights.map((flight) =>
          flight.id === updatedFlight.id ? updatedFlight : flight
        ),
      };
    default:
      return state;
  }
};

export default flightReducer;
