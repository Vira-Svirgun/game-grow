import { CHANGE_SIZE_BOARD } from "../actions";

const createBoardReducer = (state = { mode: 5 }, action) => {
  switch (action.type) {
    case CHANGE_SIZE_BOARD:
      return {
        ...state,
        mode: action.payload,
      };

    default:
      return state;
  }
};

export default createBoardReducer;
