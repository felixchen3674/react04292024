import React from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "./cakes/cakeActions";

export default function HookCakeContainer() {
  const numberOfCakes = useSelector((state) => {
    return state.numberOfCakes;
  });
  const dispatch = useDispatch();
  // useSelector has similar functionality as mapstatetoprops
  return (
    <div>
      <h2>Number of Cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>BuyCake</button>
    </div>
  );
}
