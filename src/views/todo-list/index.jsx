import React, { Component } from "react";
import Header from "./components/header";
import TaskList from "./components/task-list";
import Footer from "./components/footer";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
export default class TodoList extends Component {
  state = {
    taskName: "",
    taskList: [
      {
        id: uuidv4(),
        value: "吃早饭",
        checked: true,
      },
      {
        id: uuidv4(),
        value: "之晚饭",
        checked: false,
      },
    ],
  };
  addTaskList = (value) => {
    const { taskList } = this.state;
    this.setState({
      taskList: [{ value: value, id: uuidv4(), checked: false }, ...taskList],
    });
  };
  updateChecked = (checked, curId) => {
    const { taskList } = this.state;
    const curTask = taskList.find((task) => task.id === curId);
    if (curTask) {
      curTask.checked = checked;
    }
    this.setState({
      taskList: taskList,
    });
  };
  deleteTask = (curId) => {
    const { taskList } = this.state;
    const curTaskIndex = taskList.findIndex((task) => task.id === curId);
    if (curTaskIndex === -1) {
      return;
    }
    if (window.confirm("确认删除吗？")) {
      this.setState({
        taskList: taskList.toSpliced(curTaskIndex, 1),
      });
    }
  };
  updateAllTaskList = (checked) => {
    const { taskList } = this.state;
    this.setState({
      taskList: taskList.map((task) => {
        task.checked = checked;
        return task;
      }),
    });
  };
  render() {
    return (
      <div className="todo-list">
        <Header addTaskList={this.addTaskList} />
        <TaskList
          taskList={this.state.taskList}
          updateChecked={this.updateChecked}
          deleteTask={this.deleteTask}
        />
        <Footer
          taskList={this.state.taskList}
          updateAllTaskList={this.updateAllTaskList}
        ></Footer>
      </div>
    );
  }
}
