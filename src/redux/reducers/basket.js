const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getSumm = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_BASKET_COUNT": {
      const currentCrosBasket = !state.items[payload.id]
        ? [payload]
        : [...state.items[payload.id].items, payload];

      const newItems = {
        ...state.items,
        [payload.id]: {
          items: currentCrosBasket,
          totalPrice: getSumm(currentCrosBasket),
        },
      };

      // подсчет количества выбранных кросов

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0
      );

      // общая сумма выбранных кросов

      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "REMOVE_CROSS_BASKET": {
      const newItems = {
        ...state.items,
      };

      const currentPrice = newItems[payload].totalPrice;
      const currentCount = newItems[payload].items.length;

      delete newItems[payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentPrice,
        totalCount: state.totalCount - currentCount,
      };
    }

    case "CLEAR_BASKET": {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }
    case "PLUS_CROSS-ITEM": {
      const newStateItem = [
        ...state.items[payload].items,
        state.items[payload].items[0],
      ];

      const newItems = {
        ...state.items,
        [payload]: {
          items: newStateItem,
          totalPrice: getSumm(newStateItem),
        },
      };

      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0
      );

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0
      );

      return {
        ...state.items,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "MINUS_CROSS-ITEM": {
      const oldItems = state.items[payload].items;
      const newStateItem =
        oldItems.length > 1 ? state.items[payload].items.slice(1) : oldItems;

      const newItems = {
        ...state.items,
        [payload]: {
          items: newStateItem,
          totalPrice: getSumm(newStateItem),
        },
      };

      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0
      );

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0
      );

      return {
        ...state.items,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default basketReducer;
