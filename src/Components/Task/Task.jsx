import React, { Component } from "react";
import "./Task.css";
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  handleDelete = () => {
    this.props.deleteTask(this.props.index);
  };
  completeTask = () => {
    console.log("in function");
    this.setState({
      isClicked: true,
    });
  };

  render() {
    return (
      <div className={this.state.isClicked ? "con2" : "container"}>
        {this.props.showTask}
        <button className="btnstyle" onClick={this.handleDelete}>
          ⨉
        </button>
        <button className="btns" onClick={this.completeTask}>
          ✓
        </button>
      </div>
    );
  }
}
export default Task;
