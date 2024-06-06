import React from "react";

export default function EventHandlers() {
  const handleClick = () => {
    console.log("clicked");
  };

  return <button onClick={handleClick}>click</button>;
}
