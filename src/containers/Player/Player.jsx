import React, { useState, useRef } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import Ink from 'react-ink';
import {removeTrack} from '../../actions';

import './Player.scss';

const Player = () => {
    const { playingNowTrack } = useSelector(state => state.content);
    const dispatch = useDispatch();
    const audioRef = useRef(null);
    const [isPlaying, setPlaying] = useState(true);
    const [progressBar, setProgressBar] = useState(0);

    const handleOnEnded = () => {
        setPlaying(false);
        dispatch(removeTrack());
    }

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        const width = (audio.currentTime / audio.duration) * 100;
        setProgressBar(width.toFixed(2));
    }

    const handlePlay = () => {
        const audio = audioRef.current;
        if(isPlaying){
            setPlaying(false);
            audio.pause();
        }else{
            setPlaying(true);
            audio.play();
        }
    }

    return !playingNowTrack
        ? null
        : (
            <div className="player is-playing">
                <div className="player__wrapper">
                    <div className="player__progress-bar">
                        <div className="player__progress-bar__stroke"
                            style={{ width: progressBar+"%" }} />
                    </div>
                    <div className="container">
                        <figure
                            className="player__album-cover"
                            style={{ backgroundImage: `url(${playingNowTrack.album.images[1].url})` }}
                        />
                        <div className="player__status">
                            <div className="player__artist">
                                <span className="player__music">
                                    {playingNowTrack.name}
                                </span>
                                <span className="player__artists">
                                    {playingNowTrack.artists && playingNowTrack.artists.map(({ name }) => name).join(', ')}
                                </span>
                                <div className={`player__status__current ${isPlaying ? 'is-playing' : ''}`}>
                                    <span>Pausado</span>
                                    <span>Reproduzindo</span>
                                </div>
                            </div>
                        </div>
                        <div className="player__controls" onClick={handlePlay}>
                            <div className={`player__control ${!isPlaying ? 'is-paused' : ''}`}>
                                {!isPlaying
                                    ? (<BsPlayFill />)
                                    : (<BsPauseFill />)
                                }
                                <Ink />
                            </div>
                        </div>
                        <audio
                            ref={audioRef}
                            autoPlay
                            onEnded={handleOnEnded}
                            onTimeUpdate={handleTimeUpdate}
                            preload="metadata"
                            src={playingNowTrack.preview_url}
                        />
                    </div>
                </div>
            </div>
        );
}

export default Player;
