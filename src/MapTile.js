import React, { Component } from "react";
import "./MapTile.scss"

class MapTile extends Component {
    
    render() {
        const className = {
            1: "sea",
            2: "grass",
            3: "trees",
            4: "mountains",
            5: "road",
            6: "building",
            7: "factory",
            8: "HQ"
        }[this.props.type]
        return (
            <div className={"map-tile " + className}></div>
        );
    }
}
 
export default MapTile;