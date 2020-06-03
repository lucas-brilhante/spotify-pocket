import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { BsPlayFill, BsVolumeUpFill } from 'react-icons/bs';
import Ink from 'react-ink';
import { playTrack, removeTrack } from '../../actions';

import './Track.scss';

const Track = ({ track }) => {
    const dispatch = useDispatch();
    const { playingNowId } = useSelector(state => state.content)

    const handleClick = () =>{
        if(track.id === playingNowId)
            dispatch(removeTrack());
        else
            dispatch(playTrack(track))
    }

    return (
        <div className={(track.id === playingNowId) ? " track is-playing" : "track" } onClick={handleClick}>
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
}

export default Track;

