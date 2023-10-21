import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
export default class TaskList extends Component {
  static propTypes = {
    // task: PropTypes.func.isRequired,
    updateChecked: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
  };
  state = {
    isShow: false,
  };
  handleMouse = (isShow) => {
    this.setState({
      isShow: isShow,
    });
  };
  render() {
    const { task, updateChecked, deleteTask } = this.props;
    return (
      <div
        onMouseEnter={() => this.handleMouse(true)}
        onMouseLeave={() => this.handleMouse(false)}
        className="task-item"
      >
        <input
          type="checkbox"
          checked={task.checked}
          onChange={(event) => updateChecked(event.target.checked, task.id)}
        ></input>
        <span>{task.value}</span>
        <button
          style={this.state.isShow ? { display: "block" } : { display: "none" }}
          className="delete-button"
          onClick={() => deleteTask(task.id)}
        >
          删除
        </button>
      </div>
    );
  }
}
