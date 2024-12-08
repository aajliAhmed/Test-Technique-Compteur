import React, { useState } from "react";

function Count() {

  const [count, setCount] = useState(0);

  let color;
  if (count > 0) {
    color = "blue"; 
  } else if (count < 0) {
    color = "red"; 
  } else {
    color = "black"; 
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ color: color }}>
        {count}
      </h1>

      <button
        onClick={() => setCount(count - 1)} 
        style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "20px",
            marginRight: "20px",
            width: "50px", 
            height: "50px"
        }}
      >
        -
      </button>

      <button
        onClick={() => setCount(count + 1)} 
        style={{
            backgroundColor: "blue",
            color: "white",
            fontSize: "20px",
            marginRight: "20px",
            width: "50px", 
            height: "50px"
        }}
      >
        +
      </button>
    </div>
  );
}

export default Count;