import React from 'react';

import { ReactComponent as SpotifyLogo } from '../../assets/logos/spotify-logo-green.svg';

const Logo = () => (
    <div data-testid="logo">
        <SpotifyLogo className="spotify-brand" />
    </div>
)

export default Logo;
