export const authActionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const initialState = {
  user: {
    email: "",
  },
  isAuthhorized: false,
};
console.log(initialState.isAuthhorized);
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN:
      return {
        ...state,
        user: { ...state.user, setting: { ...state.user.setting } },
        isAuthhorized: true,
      };
    case authActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
