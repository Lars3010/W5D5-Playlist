import React from 'react';

function Header(props){
    return (
        <header>
            <form onSubmit={props.addSong} className="song-form">
                <input type="text" name="text-song" placeholder="Song"/>
                <input type="text" name="text-artist" placeholder="Artist"/>
                <select name="select-genre" id="select-genre">
                    <option value="Rock">Rock</option>
                    <option value="Pop">Pop</option>
                    <option value="Metal">Metal</option>
                    <option value="Rap">Rap</option>
                    <option value="Jazz">Jazz</option>
                </select>
                <select name="select-rating" id="select-rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>Add</button>
            </form>
        </header>
    )
}

export default Header;