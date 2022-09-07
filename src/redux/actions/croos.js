import axios from "axios";

export const setLoad = (val) => ({
  type: "SET_LOADED",
  payload: val,
});

export const getCroos = (category) => (dispatch) => {
  dispatch(setLoad(false));
  axios
    .get(`/product?${category !== null ? `category=${category}` : ""}`)
    .then(({ data }) => {
      dispatch(setCroos(data));
    });
};

export const setCroos = (items) => ({
  type: "SET_CROOS",
  payload: items,
});
