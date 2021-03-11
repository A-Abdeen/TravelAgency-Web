import instance from "./instance";

// ACTION TYPES
import * as types from "./types";
// ACTIONS

// //------------------------------FETCHING FROM BACKEND
export const fetchAirlines = () => async (dispatch) => {
  try {
    const res = await instance.get("/airlines");
    dispatch({
      type: types.FETCH_AIRLINE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};