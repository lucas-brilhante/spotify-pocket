import React, { useState, useEffect } from 'react';
import { Dashboard, Topbar, Categories, PlaylistsMain, TracksMain} from '../../containers';
import { WelcomeBox } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setCategories } from '../../actions';
import {Switch, Route} from 'react-router-dom';

const DashboardMain = () => {
    const { name } = useSelector(state => state.user);
    const { accessToken } = useSelector(state => state.auth);
    const { categories } = useSelector(state => state.content);
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get('https://api.spotify.com/v1/browse/categories', {
                    headers: {
                        Authorization: 'Bearer ' + accessToken
                    }
                });
                dispatch(setCategories(response.data.categories.items));
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
        getCategories();
    }, [accessToken, dispatch])

    return (
        <Dashboard>
            <Topbar />
            <Switch>
                <Route path="/dashboard" exact={true}>
                    <WelcomeBox name={name} />
                    <Categories data={categories} isLoading={isLoading} url={'/dashboard'} />
                </Route>
                <Route path="/dashboard/:playlists" exact={true}>
                    <PlaylistsMain />
                </Route>
                <Route path="/dashboard/:playlists/:playlistId">
                    <TracksMain />
                </Route>
            </Switch>
        </Dashboard>
    )
}

export default DashboardMain;