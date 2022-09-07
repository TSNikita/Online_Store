export const setBasket = (ind) => ({
  type: "ADD_BASKET_COUNT",
  payload: ind,
});

export const clearBasket = () => ({
  type: "CLEAR_BASKET",
});

export const removeCount = (id) => ({
  type: "REMOVE_CROSS_BASKET",
  payload: id,
});

export const plusCroos = (id) => ({
  type: "PLUS_CROSS-ITEM",
  payload: id,
});

export const minusCroos = (id) => ({
  type: "MINUS_CROSS-ITEM",
  payload: id,
});
