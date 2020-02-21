import React from "react";
import Map from "./Map"

function App() {
  return (
    <div className="warjs">
      <Map data={[
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 4, 1, 1, 1, 1],
        [1, 1, 2, 2, 4, 3, 3, 3, 3, 3, 3, 4, 4, 2, 1, 1],
        [1, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 1],
        [1, 6, 6, 4, 4, 6, 6, 6, 6, 6, 6, 4, 4, 6, 6, 1],
        [1, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 4, 2, 2, 2, 1],
        [1, 7, 2, 7, 4, 5, 2, 4, 4, 2, 5, 4, 7, 2, 7, 1],
        [1, 8, 7, 5, 4, 5, 6, 4, 4, 6, 5, 4, 5, 7, 8, 1],
        [1, 7, 3, 5, 4, 5, 2, 4, 4, 2, 5, 4, 5, 3, 7, 1],
        [1, 2, 2, 5, 5, 5, 6, 4, 4, 6, 5, 5, 5, 2, 2, 1],
        [1, 6, 6, 2, 3, 3, 4, 4, 4, 4, 3, 3, 3, 6, 6, 1],
        [1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 4, 2, 1, 1],
        [1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ]}/>
    </div>
  );
}

export default App;
