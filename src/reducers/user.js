import createReducer from './createReducer';

const initialState = [];

export default createReducer(initialState, {
    "teste": (state, action) => {
        const text = action.text.trim()
        return [...state, text]
      }
});