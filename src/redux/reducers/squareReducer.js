import { ADD_HOVER_SQUARE, REMOVE_HOVER_SQUARE } from "../actions";

const hoverReducer = (state = { hovers: [] }, action) => {
  switch (action.type) {
    case ADD_HOVER_SQUARE:
      return {
        ...state,
        hovers: [...state.hovers, action.payload],
      };

    case REMOVE_HOVER_SQUARE:
      return {
        ...state,
        hovers: state.hovers.filter(
          (square) =>
            square.row !== action.payload.row ||
            square.col !== action.payload.col
        ),
      };

    default:
      return state;
  }
};

export default hoverReducer;
