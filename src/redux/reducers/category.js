const initialState = {
  category: null,
};

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
