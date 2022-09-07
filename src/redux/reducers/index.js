import { combineReducers } from "redux";
import categoryReducer from "./category";
import crossReducer from "./croos";
import basketReducer from "./basket";

const rootReducer = combineReducers({
  category: categoryReducer,
  croos: crossReducer,
  basket: basketReducer,
});

export default rootReducer;
