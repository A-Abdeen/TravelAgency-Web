import instance from "./instance";

// ACTION TYPES
import * as types from "./types";
// ACTIONS

//------------------------------FETCHING FROM BACKEND
export const fetchOriginLocation = () => async (dispatch) => {
  try {
    const res = await instance.get("/origins");
    dispatch({
      type: types.FETCH_ORIGIN,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

//------------------------------FETCHING FROM BACKEND
export const fetchDestinationLocation = () => async (dispatch) => {
    try {
      const res = await instance.get("/destinations");
      dispatch({
        type: types.FETCH_DESTINATION,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };