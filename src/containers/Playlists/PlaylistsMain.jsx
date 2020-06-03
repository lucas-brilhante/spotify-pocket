import React, { useState, useEffect } from 'react';
import { Playlists } from '../../containers';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setPlaylists } from '../../actions';

const PlaylistsMain = () => {
    const [isFetching, setFetching] = useState(true);
    const dispatch = useDispatch();
    const { accessToken } = useSelector(state => state.auth);
    const { playlists: data, categories } = useSelector(state => state.content);
    const { playlists } = useParams();

    const category = categories.filter(category => category.id === playlists)[0];

    useEffect(() => {
        const getPlaylists = async () => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/browse/categories/${playlists}/playlists?country=BR`, {
                    headers: {
                        Authorization: 'Bearer ' + accessToken
                    }
                });
                dispatch(setPlaylists(response.data.playlists.items));
                setFetching(false);
            } catch (error) {
                console.log(error)
            }
        }
        getPlaylists();
    }, [accessToken, dispatch, playlists])

    return (
        <Playlists
            data={data}
            categoryName={category.name}
            categoryId={playlists}
            isLoading={isFetching}
            path='/dashboard'
        />
    )
}

export default PlaylistsMain;