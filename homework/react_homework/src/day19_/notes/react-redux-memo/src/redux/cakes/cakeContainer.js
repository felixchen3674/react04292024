import { connect } from "react-redux";
import buyCake from "./cakeActions";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes: {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>BuyCake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cakes.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
// export default CakeContainer;
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
