import { combineReducers } from "redux";
import sizeBoardReducer from "./sizeBoardReducer";
import squareReducer from "./squareReducer";

const rootReducer = combineReducers({
  sizeBoard: sizeBoardReducer,
  square: squareReducer,
});

export default rootReducer;
