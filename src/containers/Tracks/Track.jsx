import React from 'react';
import { BsPlayFill, BsVolumeUpFill } from 'react-icons/bs';
import Ink from 'react-ink';

import './Track.scss';

const Track = ({ track }) => (
    <div className="track">
        <div className="track__play">
            <div className="track__play__wrapper">
                <BsPlayFill className="track__play__icon" />
                <BsVolumeUpFill className="track__play__icon" />
            </div>
        </div>
        <div className="track__info">
            <span className="track__name">{track.name}</span>
            <span className="track__artists">{track.artists[0].name}</span>
        </div>
        <Ink />
    </div>
);

export default Track;

