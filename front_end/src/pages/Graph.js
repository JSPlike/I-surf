import React from 'react';
import './Graph.css';
// if you change graph image
// change this image path
import graphImage from '../resources/GraphScreen2.png';

function Graph() {
    return (
        <section className="background_graph">
            <img src={graphImage} alt="graph"></img> 
        </section>
    )
}

export default Graph