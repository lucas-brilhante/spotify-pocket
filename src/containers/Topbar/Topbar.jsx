import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as SpotifyLogo } from '../../assets/logos/spotify-logo-green.svg';
import './Topbar.scss';

const Topbar = () => {
    const user = useSelector(state => state.user);
    return (
        <header className="topbar">
            <div className="container">
                <Link to="/dashboard">
                    <SpotifyLogo className="spotify-brand" data-testid="logo"/>
                </Link>
                <div className="user">
                    <span className="user__name">{user.name}</span>
                    <figure className="user__thumb">
                        <img alt='Avatar' src={user.thumb} />
                    </figure>
                </div>
            </div>
        </header>
    );
}

export default Topbar;
