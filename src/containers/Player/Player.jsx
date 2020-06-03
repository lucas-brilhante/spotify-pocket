import React, {useState, useEffect, useRef} from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import Ink from 'react-ink';

const Player = () => {
    const { playingNowTrack } = useSelector(state => state.content);
    const audioRef = useRef(null);
    const [isPlaying, setPlaying] = useState(true);
    console.log('track', playingNowTrack);

    const handleOnEnded = () =>{

    }

    const handleTimeUpdate = () =>{

    }

    const handlePlay = () =>{

    }

    return !playingNowTrack
        ? null
        : (
            <div className="player is-playing">
                <div className="player__wrapper">
                    <div className="player__progress-bar">
                        <div className="player__progress-bar__stroke" />
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
                                    <div className={`player__status__current ${playingNowTrack ? 'is-playing' : ''}`}>
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
            </div>
        );
}

export default Player;
