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
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

//------------------------------FETCHING FROM BACKEND
// export const fetchAirlineFlight = () => async (dispatch) => {
//   try {
//     const res = await instance.get("/airlines/:airlineId/flights");
//     dispatch({
//       type: types.FETCH_AIRLINE_FLIGHT,
//       payload: res.data,
//     });
//     console.log(res.data);
//   } catch (err) {
//     console.error(err);
//   }
// };
