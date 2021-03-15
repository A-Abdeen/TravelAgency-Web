import instance from "./instance";

// ACTION TYPES
import * as types from "./types";
// ACTIONS

//------------------------------FETCHING FROM BACKEND
export const fetchFlights = () => async (dispatch) => {
  try {
    console.log("hello");
    const res = await instance.get("/flights");
    dispatch({
      type: types.FETCH_FLIGHT,
      payload: res.data,
    });
    console.log("helloo");
  } catch (err) {
    console.error(err);
  }
};

//------------------------------ADDING

export const addFlight = (newFlight) => async (dispatch) => {
  try {
    console.log(newFlight);
    const res = await instance.post(
      `/airlines/${newFlight.airlineId}/flights`,
      newFlight
    );
    console.log(res);
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
export const searchFlights = () => async (dispatch) => {
  try {
    const res = await instance.get("/flights/search");
    dispatch({
      type: types.SEARCH_FLIGHT,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
