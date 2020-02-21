import React, { Component } from "react";
import MapTile from "./MapTile";
import "./Map.scss"

class Map extends Component {
    
    render() { 
        return (
            <div className="map">
                {this.props.data.map((row, x) => <div className="map-row" key={x}>
                    {row.map((tile, y) => <MapTile type={tile} key={y} />)}
                </div>)}
            </div>
        );
    }
}
 
export default Map;