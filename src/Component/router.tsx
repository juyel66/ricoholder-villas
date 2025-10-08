import { createBrowserRouter } from "react-router";
// import Root from "./root";
import Home from "../pages/Home";
import Rents from "../pages/Rents";
import Sales from "../pages/Sales";
// import ListWithUs from "../pages/listWithUs";
import Management from "../pages/Management";
import Concierge from "../pages/Concierge";
import Root from "./Root";
import ListWithUs from "../pages/ListWithUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/rents", element: <Rents /> },
      { path: "/sales", element: <Sales /> },
      { path: "/list-with-us", element: <ListWithUs /> },
      { path: "/management", element: <Management /> },
      { path: "/concierge", element: <Concierge /> },
    ],
  },
]);
