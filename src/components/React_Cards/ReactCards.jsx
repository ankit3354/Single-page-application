import React from "react";
import Background from "./CardBox/Background";
import ForGround from "./CardBox/ForGround";

function ReactCards() {
  return (
    <div className="relative inset-0 w-full h-screen bg-teal-950">
      <Background />
      <ForGround />
    </div>
  );
}

export default ReactCards;
