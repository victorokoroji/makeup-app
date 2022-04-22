import getMoviesFromServer from '../services/makeupService';

const GET_ALL_MAKEUPS = 'make-up-app/makeups/GET_ALL_MAKEUPS';

const initialState = [];

export const getAllMakeUps = () => async (dispatch) => {
  const result = await getMoviesFromServer();
  dispatch({
    type: GET_ALL_MAKEUPS,
    payload: result,
  });
};

const makeupReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ALL_MAKEUPS:
      return payload;
    default:
      return state;
  }
};

export default makeupReducer;
