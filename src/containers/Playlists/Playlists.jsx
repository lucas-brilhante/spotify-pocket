import React from 'react';
import { RouteHeader, Loading } from '../../components';
import { PlaylistItem } from '../../containers';

import './Playlists.scss';

const Playlists = ({ data, categoryName, categoryId, isLoading, path }) => {
    return isLoading
        ? (<Loading />)
        : (
            <div className="playlists">
                <div className="container">
                    <RouteHeader categoryName={categoryName} path={path} />
                    <div className="playlists__content">
                        {data.map((playlist) => (
                            <PlaylistItem 
                                key={playlist.id}
                                categoryId={categoryId}
                                description={playlist.description}
                                id={playlist.id}
                                image={playlist.images[0].url}
                                name={playlist.name} path={path} />
                        ))}
                    </div>
                </div>
            </div>

        );
}

export default Playlists;

