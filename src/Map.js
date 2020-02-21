import React, { Component } from "react";
import MapTile from "./MapTile";
import "./Map.scss"

class Map extends Component {
    
    render() {
        const data = this.props.data;
        return (
            <div className="map">
                {data.map((row, x) => <div className="map-row" key={x}>
                    {row.map((tile, y) => <
                        MapTile
                        type={tile}
                        above={x > 0 ? data[x - 1][y] : undefined}
                        below={x < data.length - 1 ? data[x + 1][y] : undefined}
                        left={row[y-1]}
                        right={row[y+1]}
                        key={y}
                    />)}
                </div>)}
            </div>
        );
    }
}
 
export default Map;