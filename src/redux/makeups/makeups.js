import getMakeupsFromServer from '../services/makeupService';

const GET_ALL_FOUNDATIONS = 'make-up-app/makeups/GET_ALL_FOUNDATIONS';

const initialState = [];

export const getAllFoundations = () => async (dispatch) => {
  const result = await getMakeupsFromServer();
  dispatch({
    type: GET_ALL_FOUNDATIONS,
    payload: result,
  });
};

const makeupReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ALL_FOUNDATIONS:
      return payload;
    default:
      return state;
  }
};

export default makeupReducer;
