import React from "react";
import Map from "./Map"
import { map1 } from "./maps";

function App() {
  return (
    <div className="warjs">
      <Map data={map1.grid}/>
    </div>
  );
}

export default App;
