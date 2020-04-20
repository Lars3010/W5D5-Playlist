import React from 'react';
import options from '../options.js';

function Filter(props){
    const genreOptions = options.genres.map(genre => {
        return <option key={genre} value={genre}>{genre}</option>
    })
    const filterOptions = options.ratings.map(rating => {
        return <option key={rating} value={rating}>{rating}</option>
    })

    return(
        <div>
            <label htmlFor="select-filter-genre"> Genre
                <select name="select-filter-genre" id="select-filter-genre" onChange={props.filterSongs}>
                    <option value="All">All</option>
                    {genreOptions}
                </select>
            </label>
            <label htmlFor="select-filter-rating"> Rating
                <select name="select-filter-rating" id="select-filter-rating" onChange={props.filterSongs}>
                    <option value="All">All</option>
                    {filterOptions}
                </select>
            </label>
        </div>
    )
}

export default Filter