export const CHANGE_SIZE_BOARD = "CHANGE_SIZE_BOARD";
export const ADD_HOVER_SQUARE = "ADD_HOVER_SQUARER";
export const REMOVE_HOVER_SQUARE = "REMOVE_HOVER_SQUARE";

export const changeBoard = (changeValue) => {
  return {
    type: CHANGE_SIZE_BOARD,
    payload: changeValue,
  };
};

export const addHover = (addHoverItem) => {
  return {
    type: ADD_HOVER_SQUARE,
    payload: addHoverItem,
  };
};

export const removeHover = (removeHoverItem) => {
  return {
    type: REMOVE_HOVER_SQUARE,
    payload: removeHoverItem,
  };
};
