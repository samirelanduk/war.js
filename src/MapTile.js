import React, { Component } from "react";
import { MapEnum } from "./maps";
import "./MapTile.scss"

class MapTile extends Component {
    
    render() {
        const className = {
            [MapEnum.SEA]: "sea",
            [MapEnum.PLAINS]: "grass",
            [MapEnum.TREES]: "trees",
            [MapEnum.MOUNTAIN]: "mountains",
            [MapEnum.ROAD]: "road",
            [MapEnum.BRIDGE]: "bridge",
            [MapEnum.BUILDINGS]: "building",
            [MapEnum.FACTORY]: "factory",
            [MapEnum.CAPITOL]: "HQ"
        }[this.props.type]
        return (
            <div className={"map-tile " + className}></div>
        );
    }
}
 
export default MapTile;