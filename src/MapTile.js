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

        if (type === MapEnum.ROAD || type === MapEnum.BRIDGE) {
            if (left === MapEnum.ROAD || left === MapEnum.BRIDGE) {
                classNames.push("extend-left");
            }
            if (right === MapEnum.ROAD || right === MapEnum.BRIDGE) {
                classNames.push("extend-right");
            }
            if (above === MapEnum.ROAD || above === MapEnum.BRIDGE) {
                classNames.push("extend-above");
            }
            if (below === MapEnum.ROAD || below === MapEnum.BRIDGE) {
                classNames.push("extend-below");
            }
        }

        if (type === MapEnum.BRIDGE) {
            if (left !== MapEnum.SEA) {
                classNames.push("extend-left");
            }
            if (right !== MapEnum.SEA) {
                classNames.push("extend-right");
            }
            if (above !== MapEnum.SEA) {
                classNames.push("extend-above");
            }
            if (below !== MapEnum.SEA) {
                classNames.push("extend-below");
            }
        }

        return (
            <div className={"map-tile " + classNames.join(" ")}>
                <div className="contents"></div>
            </div>
        );
    }
}
 
export default MapTile;