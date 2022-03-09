import * as types from "../constants";

export const loadNewsStart = () => ({
    type: types.LOAD_NEWS_START,
});

export const loadNewsSuccess = (news) => ({
    type: types.LOAD_NEWS_SUCCESS,
    payload: news,
});
export const loadNewsError = (error) => ({
    type: types.LOAD_NEWS_ERROR,
    payload: error,
});

