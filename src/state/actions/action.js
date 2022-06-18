export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const REMOVE = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

export const REMOVE_ONE = (item) => {
  return {
    type: "RMV_ONE",
    payload: item,
  };
};
