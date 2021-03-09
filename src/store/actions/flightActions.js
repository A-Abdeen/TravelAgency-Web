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
    const formData = new FormData();
    for (const key in newFlight) formData.append(key, newFlight[key]);
    const res = await instance.post(`/:airlineSlug/${newFlight.Id}`, formData);
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
    const formData = new FormData();
    for (const key in updatedFlight) formData.append(key, updatedFlight[key]);
    const res = await instance.put(
      `/:airlineSlug/${updatedFlight.id}`,
      formData
    );
    dispatch({
      type: types.UPDATE_FLIGHT,
      payload: { updatedFlight: res.data },
    });
  } catch (err) {
    console.error(err);
  }
};
