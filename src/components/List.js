import React from 'react';
import ListItem from './ListItem.js';

function List(props){
    const listitems = props.songs.map(item => {
        return (
            <ListItem key={item.id} song={item} removeSong={props.removeSong}/>
        )
    });

    return(
        <ul>
            {listitems}
        </ul>
    )
}

export default List;