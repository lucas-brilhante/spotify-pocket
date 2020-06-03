import React, { useState, useEffect } from 'react';
import { Dashboard, Topbar, Categories, PlaylistsMain, Player } from '../../containers';
import { WelcomeBox } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setCategories, setUserInfo } from '../../actions';
import { Switch, Route } from 'react-router-dom';

const DashboardMain = () => {
    const { accessToken } = useSelector(state => state.auth);
    const { categories } = useSelector(state => state.content);
    const { name } = useSelector(state => state.user);
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategories = async () => {
            try {
                if (name === '') {
                    const userInfo = await axios.get('https://api.spotify.com/v1/me', {
                        headers: {
                            Authorization: 'Bearer ' + accessToken
                        }
                    });
                    const { email, display_name, images } = userInfo.data;
                    dispatch(setUserInfo(email, display_name, images[0].url));
                } else {
                    const response = await axios.get('https://api.spotify.com/v1/browse/categories', {
                        headers: {
                            Authorization: 'Bearer ' + accessToken
                        }
                    });
                    dispatch(setCategories(response.data.categories.items));
                    setLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }
        getCategories();
    }, [accessToken, dispatch, name])

    return (
        <Dashboard>
            <Topbar />
            <Switch>
                <Route path="/dashboard" exact={true}>
                    <WelcomeBox name={name} />
                    <Categories data={categories} isLoading={isLoading} url={'/dashboard'} />
                </Route>
                <Route path="/dashboard/:playlists">
                    <PlaylistsMain />
                </Route>
            </Switch>
            <Player />
        </Dashboard>
    )
}

export default DashboardMain;