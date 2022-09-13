import React, { useState } from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
    return (
        <div className="ui container">
            <h3>Song Detail</h3>
            {selectedSong && (
                <div>
                    <h4>{selectedSong.title}</h4>
                    <p>{selectedSong.length}</p>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
