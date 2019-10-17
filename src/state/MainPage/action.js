export const GET_APP_DATA = 'GET_APP_DATA';
export const GET_APP_DATA_SUCCESS = 'GET_APP_DATA_SUCCESS';
export const GET_APP_DATA_ERROR = 'GET_APP_DATA_ERROR';

export function getAppData() {
  return {
    type: GET_APP_DATA
  };
}

export function getAppDataSuccess(payload) {
  return {
    type: GET_APP_DATA_SUCCESS,
    payload
  };
}

export function getAppDataError(error) {
  return {
    type: GET_APP_DATA_ERROR,
    error
  };
}

export default {};
