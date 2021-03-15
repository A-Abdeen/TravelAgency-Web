import instance from "./instance";

// ACTION TYPES
import * as types from "./types";
// ACTIONS

//------------------------------FETCHING FROM BACKEND
export const fetchFlights = () => async (dispatch) => {
  try {
    const res = await instance.get("/flights");
    dispatch({
      type: types.FETCH_FLIGHT,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

//------------------------------ADDING

export const addFlight = (newFlight) => async (dispatch) => {
  try {
    const res = await instance.post(
      `/airlines/${newFlight.airlineId}/flights`,
      newFlight
    );
    dispatch({
      type: types.ADD_FLIGHT,
      payload: { newFlight: res.data },
    });
  } catch (err) {
    console.error(err);
  }
};

//------------------------------UPDATING
export const updateFlight = (updatedFlight) => async (dispatch) => {
  try {
    const res = await instance.put(
      `/flights/${updatedFlight.id}`,
      updatedFlight
    );
    dispatch({
      type: types.UPDATE_FLIGHT,
      payload: { updatedFlight: res.data },
    });
  } catch (err) {
    console.error(err);
  }
};
//------------------------------SEARCH
export const searchFlights = (flight) => async (dispatch) => {
  try {
    console.log("hello",flight);
    const res = await instance.post("/flights/search",flight);
    dispatch({
      type: types.SEARCH_FLIGHT,
      payload: {flight: res.data},
    });
    console.log(flight);
  } catch (err) {
    console.error(err);
  }
};
