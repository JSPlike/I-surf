import React from 'react';
import './Graph.css';

import graphImage from '../resources/GraphScreen2.png';

function Graph() {
    return (
        <section className="background_graph">
            <img src={graphImage} alt="graph"></img>
            <button  onClick={()=>{this.props.handler('Main view.')}}>go to survey</button>
        </section>
    )
}

export default Graph