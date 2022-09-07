const initialState = {
  items: [],
  isloaded: false,
};

const crossReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CROOS":
      return {
        ...state,
        items: payload,
        isloaded: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isloaded: false,
      };
    default:
      return state;
  }
};

export default crossReducer;
