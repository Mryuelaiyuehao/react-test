import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
export default class Header extends Component {
  onKeyDown = (event) => {
    const { addTaskList } = this.props;
    if (event.keyCode === 13) {
      addTaskList(event.target.value);
      event.target.value = "";
    }
  };
  static propTypes = {
    addTaskList: PropTypes.func.isRequired,
  };
  render() {
    return (
      <input
        onKeyDown={this.onKeyDown}
        placeholder="请输入任务名称，按enter键结束"
        className="search-box"
        type="input"
      ></input>
    );
  }
}
