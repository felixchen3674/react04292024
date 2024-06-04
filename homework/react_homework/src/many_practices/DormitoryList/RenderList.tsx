import React, { useContext } from "react";
import { dormContext } from "./dormContext";

export default function RenderList() {
  const { data } = useContext(dormContext);
  return (
    <div className="ResidentListContainer">
      {data &&
        data.map((item) => {
          return <h5 key={item.name}>{item.name}</h5>;
        })}
    </div>
  );
}
