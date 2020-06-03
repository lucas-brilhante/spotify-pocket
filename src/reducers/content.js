import createReducer from './createReducer';

const initialState = {
    categories: [],
    playlists: [],
    tracks: [],
    playingNowId: null,
    playingNowTrack: null,
    playerHeight: 0,
    status: 'idle',
    errorMessage: ""
};

export default createReducer(initialState, {
    SET_CATEGORIES: (state,action) => ({...state, categories: action.payload}),
    SET_PLAYLISTS: (state, action) => ({...state, playlists: action.payload}),
    SET_TRACKS: (state, action) => ({...state, tracks: action.payload}),
});