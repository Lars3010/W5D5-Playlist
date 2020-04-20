import React from 'react';

function ListItem(props){
    console.log(props);
    
    return (
    <li className="list-item">
        <span>{props.song.song}</span>
        <span>{props.song.artist}</span>
        <span>{props.song.genre}</span>
        <span>{props.song.rating}</span>
        <button onClick={props.removeSong}>X</button>
    </li>
    )
}

export default ListItem;