import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
export default class Footer extends Component {
  static propTypes = {
    // taskList: PropTypes.func.isRequired,
    updateAllTaskList: PropTypes.func.isRequired,
  };
  render() {
    const { taskList, updateAllTaskList } = this.props;
    const checkedTaskList = taskList.filter((task) => task.checked);
    const isAllChecked = checkedTaskList.length === taskList.length;
    return (
      <div className="footer-box">
        <input
          type="checkbox"
          checked={isAllChecked && checkedTaskList.length > 0}
          onChange={(event) => updateAllTaskList(!isAllChecked)}
        ></input>
        <div>
          已完成 {checkedTaskList.length} / 全部 {taskList.length}
          <div></div>
        </div>
        <button
          className="clear-button"
          onClick={() => updateAllTaskList(false)}
        >
          清除所有已完成任务
        </button>
      </div>
    );
  }
}
