import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = ({ songs, selectSong }) => {
    const songsEl = songs.map((song) => {
        return (
            <li className="item">
                <div className="content">
                    <div className="header">
                        <p style={{ display: "flex" }}>
                            {song.title}
                        </p>
                    </div>
                    <div className="">
                        <button
                            className="ui button primary right floated"
                            onClick={() => selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                </div>
            </li>
        );
    });

    return (
        <div className="ui container">
            <h3>SongList</h3>
            <ul className="ui grid divided items">{songsEl}</ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
