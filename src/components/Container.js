import React from 'react';
import Header from './Header.js';
import List from './List.js';

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            songs: [
                {song: "song", artist: "artist", genre: "genre", rating: 2}
            ]
        }
    }

    render() {
        return (
            <div>
                <Header/>

                <List songs={this.state.songs}/>
            </div>
        )
    }
}

export default Container;