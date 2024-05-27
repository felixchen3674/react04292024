import React from "react";
import { useDispatch, useSelector } from "react-redux";
import buyIceCream from "./icecreamActions";

export default function IcecreramContainer() {
  const numberOfIceCream = useSelector((state) => {
    return state.icecream.numberOfIcecream;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>number of iceCream:{numberOfIceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}
