import React from 'react';
import './Graph.css';

import graphImage from '../resources/graph.jpg';


function Graph() {
    return (
        <section className="background_graph">
            <img src={graphImage} alt="graph"></img>
        </section>
    )
}

export default Graph