import createReducer from './createReducer';

const initialState = {
  email: '',
  errorMessage: '',
  name: '',
  status: '',
  thumb: ''
};

export default createReducer(initialState, {
    SET_USER_INFO: (state, action) => ({...state, ...action.payload})
});