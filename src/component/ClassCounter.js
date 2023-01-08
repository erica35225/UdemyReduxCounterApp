import { Component } from "react";
import { connect } from "react-redux";
import styles from "../component/Counter.module.css";

class ClassCounter extends Component {
  incrementHandler = () => {
    this.props.incrementByOne();
  };
  decrementHandler = () => {
    this.props.decrementByOne();
  };
  render() {
    return (
      <div className={styles.container}>
        <button
          className={styles.button_increment}
          onClick={this.incrementHandler.bind(this)}
        >
          Increment
        </button>
        <div>{this.props.counterValue}</div>
        <button
          className={styles.button_decrement}
          onClick={this.decrementHandler.bind(this)}
        >
          Decrement
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counterValue: state.counterValue.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrementByOne: () => dispatch({ type: "Increment" }),
    decrementByOne: () => dispatch({ type: "Decrement" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
