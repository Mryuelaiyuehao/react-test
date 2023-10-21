import React, { Component } from "react";
import PropTypes from "prop-types";
import TaskListItem from "../task-list-item";
import "./index.css";
export default class TaskList extends Component {
  static propTypes = {
    // taskList: PropTypes.func.isRequired,
    updateChecked: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
  };
  render() {
    const { taskList, updateChecked, deleteTask } = this.props;
    return (
      <div className="task-list">
        {taskList.map((task, index) => {
          return (
            <TaskListItem
              task={task}
              key={task.id}
              updateChecked={updateChecked}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    );
  }
}
