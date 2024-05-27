import React from "react";
import { connect } from "react-redux";
import buyCake from "./cakes/cakeActions";
import buyIceCream from "./iceCream/icecreamActions";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item- {props.item}</h2>
      <button onClick={props.buyItems}>Buy Items</button>
    </div>
  );
}

const mapstatetoprops = (state, ownprops) => {
  const itemState = ownprops.cakes
    ? state.cakes.numberOfCakes // behave as cakes container
    : state.icecream.numberOfIcecream; //behave as icecream container
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownprops) => {
  const dispatchFuction = ownprops.cakes
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItems: dispatchFuction,
  };
};
export default connect(mapstatetoprops, mapDispatchToProps)(ItemContainer);
