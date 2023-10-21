import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

export default function About() {
  const [list] = useState([
    { id: "01", to: "news", value: "新闻" },
    { id: "01", to: "message", value: "消息" },
  ]);
  return (
    <>
      <div className="about">About 内容</div>
      <div>
        {list.map((message) => (
          <NavLink className="route-link" key={message.id} to={message.to}>
            {message.value}
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
