import * as ActionTypes from '../constants';

const initialState = {
    projects : [],
    loading: false, 
    error: null,

};

const news =  (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOAD_NEWS_START:
      return {
        ...state,
        loading: true,

        // status: payload.status,
      };

    case ActionTypes.LOAD_NEWS_SUCCESS:
      return {
          ...state,
          news: payload
      };

    case ActionTypes.LOAD_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }

    case ActionTypes.SET_IS_ALL_MARKETNEWS:
      return {
        ...state,
        loading: false,
        isAllMarket: payload
      }
    case ActionTypes.SET_IS_ALL_PROJECTNEWS:
      return {
        ...state,
        loading: false,
        isAllProject: payload
      }
    default:
      return state;
  }
};

export default news;