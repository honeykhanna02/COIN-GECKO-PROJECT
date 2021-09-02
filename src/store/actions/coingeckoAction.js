import { ActionType } from './actionType';

export const getCoingeckoData = (data) => {
    return {
        type: ActionType.GET_COINGECKO_DATA,
        payload: data,
    }
};

export const successCoingeckoData = (data) => {
    return {
        type: ActionType.SUCCESS_COINGECKO_DATA,
        payload: data,
    }
};

export const failedCoingeckoData = (error) => {
    return {
        type: ActionType.FAILED_COINGECKO_DATA,
        payload: error,
    }
};

export const filterCoingeckoData = (data) => {
    return {
        type: ActionType.FILTER_COINGECKO_DATA,
        payload: data,
    }
};

