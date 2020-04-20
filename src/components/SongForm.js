import React from 'react';
import options from '../options.js';

function Header(props){
    const genreOptions = options.genres.map(genre => {
        return <option key={genre} value={genre}>{genre}</option>
    })
    const filterOptions = options.ratings.map(rating => {
        return <option key={rating} value={rating}>{rating}</option>
    })

    return (
        <header>
            <form onSubmit={props.addSong} className="song-form">
                <input type="text" name="text-song" placeholder="Song"/>
                <input type="text" name="text-artist" placeholder="Artist"/>
                <select name="select-genre" id="select-genre">
                    {genreOptions}
                </select>
                <select name="select-rating" id="select-rating">
                    {filterOptions}
                </select>
                <button>Add</button>
            </form>
        </header>
    )
}

export default Header;