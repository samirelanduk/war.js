import React, { Component } from "react";
import { MapEnum } from "./maps";
import "./MapTile.scss"

class MapTile extends Component {
    
    render() {
        const {type, above, below, left, right} = this.props
        const classNames = [];

        classNames.push({
            [MapEnum.SEA]: "sea",
            [MapEnum.PLAINS]: "grass",
            [MapEnum.TREES]: "trees",
            [MapEnum.MOUNTAIN]: "mountains",
            [MapEnum.ROAD]: "road",
            [MapEnum.BRIDGE]: "bridge",
            [MapEnum.BUILDINGS]: "building",
            [MapEnum.FACTORY]: "factory",
            [MapEnum.CAPITOL]: "HQ"
        }[type])

        return (
            <div className={"map-tile " + classNames.join(" ")}></div>
        );
    }
}
 
export default MapTile;