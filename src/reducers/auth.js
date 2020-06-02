import createReducer from './createReducer';

const initialState = {
    accessToken: '',
    errorMessage: '',
    expirationTime: '',
    expiresIn: '',
    isLogged: false,
    tokenType: ''
};

export default createReducer(initialState, {
    AUTHENTICATION: (state, action) => ({ ...state, ...action.payload })
})