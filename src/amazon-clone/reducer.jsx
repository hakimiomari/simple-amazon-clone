export const initialValue = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
