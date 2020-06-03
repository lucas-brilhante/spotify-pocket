import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {setTracks} from '../../actions';
import {Tracks} from '../../containers';

const TracksMain = () => {
    const { playlists, playlistId } = useParams();
    const [isLoading, setLoading] = useState(true);
    const { accessToken } = useSelector(state => state.auth);
    const { tracks, categories } = useSelector(state => state.content);
    const dispatch = useDispatch();
    const category = categories.filter(category => category.id === playlists)[0];

    useEffect(() => {
        const getPlaylistSongs = async () => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    headers: {
                        Authorization: "Bearer " + accessToken
                    }
                })

                dispatch(setTracks(response.data.items));
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
        getPlaylistSongs();
    }, [playlistId, accessToken, dispatch])

    return (
        <Tracks categoryName={category?category.name:''} data={tracks} isLoading={isLoading} path={'/dashboard'} />
    )
}

export default TracksMain;