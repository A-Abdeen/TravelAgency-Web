import * as types from "../actions/types";

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
      case types.SET_USER:
          const { updatedProfile } = action.payload;
          return {
            ...state,
            users: state.users.map((user) =>
              user.id === updatedProfile.id ? updatedProfile : user
            ),
          };
    default:
      return state;
  }
};

export default reducer;