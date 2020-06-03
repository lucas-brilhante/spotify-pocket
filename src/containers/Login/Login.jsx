import React from 'react';
import AppIntro1 from '../../assets/images/app-intro-2.jpg';
import { ReactComponent as SpotifyLogo } from '../../assets/logos/spotify-logo-green.svg';
import { config } from '../../config';

import './Login.scss';

const { spotify } = config;

const url = `${spotify.authorizationURL}?client_id=${spotify.clientId}${(spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes) : '')}&redirect_uri=${encodeURIComponent(spotify.redirectUrl)}&response_type=token&show_dialog=true`;

const Login = () => {
    return (
        <main className="login"
            style={{ backgroundImage: "url(" + AppIntro1 + ")" }}
        >
            <div className="container">
                <SpotifyLogo className="spotify-brand" />
                <div className="login__microcopy">
                    <p>Não toca a música inteira,</p>
                    <strong>mas toca o seu
                    <span role="img" aria-label="Coração"> ❤️</span>
                    </strong>
                </div>
                <a  href={url}
                    className="login__auth-button">
                    Entrar com Spotify
                </a>
            </div>
        </main>
    );
}

export default Login;
