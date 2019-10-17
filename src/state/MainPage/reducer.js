import { GET_APP_DATA, GET_APP_DATA_SUCCESS, GET_APP_DATA_ERROR } from './action';

const initialState = {
  data: ''
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_APP_DATA:
      return {
        ...state
      };
    case GET_APP_DATA_SUCCESS:
      return {
        ...state,
        data: payload.message
      };

    case GET_APP_DATA_ERROR:
      return {
        ...state,
        error: payload
      };

    default:
      return state;
  }
};

export default reducer;
