import { ActionType } from "../actions/actionType";

const initialState = {
  loading: false,
  data: [],
  error: null
};

export const reducerCoinGecko = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_COINGECKO_DATA:
      return {
        ...state,
        loading: true,
      };

    case ActionType.SUCCESS_COINGECKO_DATA:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: " ",
      };

    case ActionType.FAILED_COINGECKO_DATA:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.error,
      };

    case ActionType.FILTER_COINGECKO_DATA:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: " ",
      };

    default:
      return state;
  }
};
