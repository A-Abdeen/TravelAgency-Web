import * as types from "../actions/types";

const initialState = {
  airlines: [],
  loading: true,
};

const airlineReducer = (state = initialState, action) => {
  switch (action.type) {
    // //------------------------------FETCHING FROM BACKEND
    case types.FETCH_AIRLINE:
      return {
        ...state,
        airlines: action.payload,
        loading: false,
      };

    //------------------------------FETCHING FROM BACKEND
    // case types.FETCH_AIRLINE_FLIGHT:
    //   return {
    //     ...state,
    //     airlines: action.payload,
    //     loading: false,
    //   };

    default:
      return state;
  }
};

export default airlineReducer;
