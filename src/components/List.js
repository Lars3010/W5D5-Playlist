import React from 'react';
import ListItem from './ListItem.js';

function List(props){
    console.log(props);
    
    const listitems = null;

    return(
        <ul>
            {listitems}
        </ul>
    )
}

export default List;