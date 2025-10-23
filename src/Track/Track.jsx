import React, {useCallback} from 'react';

//Individual track object to go into tracklist search results
const Track = (props) => {

    //Add track to playlist
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );

    //Remove track from playlist
    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        },
        [props.onRemove, props.track]
    );

    //Display "Add" or "Remove" buttons
    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button onClick={removeTrack}>
                    -
                </button>
            );
        };
        return (
            <button onClick={addTrack}>
                +
            </button>
        );
    };

    //Return individual track with song name, artist, and album info
    return (
        <div className='track'>
            <div className='track-info'>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist}</p>
                <p>{props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track;