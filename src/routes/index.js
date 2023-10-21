import { Navigate } from "react-router-dom"
import Home from "../views/home";
import About from "../views/about";
import News from "../views/about/views/news";
import Message from "../views/about/views/message";
const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      { path: "news", element: <News /> },
      { path: "message", element: <Message /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
];
export default routes;
