import {  NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";

function App() {
  const elements = useRoutes(routes);
  return (
    <div className="App">
      <NavLink className="route-link" to="/home">
        Home
      </NavLink>
      <NavLink className="route-link" to="/about">
        about
      </NavLink>
      <div className="route-view">{elements}</div>
    </div>
  );
}

export default App;
