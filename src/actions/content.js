export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories
})

export const setPlaylists = (playlists) => ({
    type: 'SET_PLAYLISTS',
    payload: playlists
})

export const setTracks = (tracks) => ({
    type: 'SET_TRACKS',
    payload: tracks
})

export const playTrack = (track) => ({
    type: 'PLAY_TRACK',
    payload: {
        playingNowId: track.id,
        playingNowTrack: track
    }
})

export const removeTrack = () =>({
    type: 'REMOVE_TRACK',
    payload: {
        playingNowId: null,
        playingNowTrack: null, 
    }
})