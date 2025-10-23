import React from 'react';
import Track from '../Track/Track';

// Use .map() to build array of tracks
const Tracklist = (props) => {
    return (
        <div>
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                    />
                );
            })}
        </div>
    );
};

export default Tracklist;