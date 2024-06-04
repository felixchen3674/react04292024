import React, { useContext } from "react";
import { dormContext } from "./dormContext";

export default function JoiningDate() {
  const { joinDate, setJoinDate } = useContext(dormContext);
  return (
    <div className="joinDateContainer">
      <h4>Joining Date :</h4>
      <input
        type="date"
        value={joinDate}
        onChange={(e) => setJoinDate(e.target.value)}
      ></input>
    </div>
  );
}
