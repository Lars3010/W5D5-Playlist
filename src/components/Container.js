import React from 'react';
import SongForm from './SongForm.js';
import List from './List.js';

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            songs: [
                {id: 1, song: "song", artist: "artist", genre: "genre", rating: "2"},
                {id: 2, song: "song2", artist: "artist2", genre: "genre2", rating: "4"}
            ]
        }
    }

    /**
     * Adds a song to state
     */
    addSong = (event) => {
        event.preventDefault();
        const id = this.state.songs.length + 1;
        const song = event.target[0].value;
        const artist = event.target[1].value;
        const genre = event.target[2].value;
        const rating = event.target[3].value;
        const newSong = {id: id, song: song,artist: artist,genre: genre,rating: rating}
        this.setState(prevState => {
            const newState = prevState.songs.concat(newSong);
            return {
                songs: newState
            }
        })
    }

    /**
     * functions that removes a song from the lost by selecting the songtext from the parentnode and filtering it out from the rest of the state
     */
    removeSong = (event) => {
        event.preventDefault();
        const parentnode = event.target.parentNode;
        const oldState = this.state.songs;
        const newState = oldState.filter(item => {
            return item.song !== parentnode.children[0].innerHTML;
        })
        this.setState({
            songs: newState
        })
    }

    render() {
        return (
            <div>
                <SongForm addSong={this.addSong}/>
                
                <List songs={this.state.songs} removeSong={this.removeSong}/>
            </div>
        )
    }
}

export default Container;