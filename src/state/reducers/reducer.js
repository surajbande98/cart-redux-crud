const INIT_STATE = {
  carts: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const data = state.carts.filter((e) => e.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "RMV_ONE":
      const iIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (iIndex >= 0) {
        if (state.carts[iIndex].qnty > 1) {
          state.carts[iIndex].qnty -= 1;
          return {
            ...state,
            carts: [...state.carts],
          };
        } else if (state.carts[iIndex].qnty == 1) {
          state.carts[iIndex].qnty -= 1;
          //const data = state.carts.filter((e) => e.id !== action.payload.id);
          return {
            ...state,
            carts: [...state.carts],
          };
        }
      }
    default:
      return state;
  }
};
