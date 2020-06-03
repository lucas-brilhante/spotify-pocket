import React  from 'react';
import { RouteHeader, Loading } from '../../components';
import {Track} from '../../containers';

import './Tracks.scss';

const Tracks = ({ categoryName, data, isLoading, path }) => {
    return isLoading
    ?(<Loading />)
    :(
    <div className="tracks" data-testid="tracks">
       <div className="container">
            <RouteHeader categoryName={categoryName} path={path} />
            <div className="tracks__content">
                {data.map((track) => <Track key={track.track.id} track={track.track}/>)}
            </div>
       </div>
    </div>    
)};

export default Tracks;

