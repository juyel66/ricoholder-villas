import { createBrowserRouter } from "react-router";
// import Root from "./root";
import Home from "./pages/Home/Home";
import Rents from "./pages/Rents/Rents";
import Sales from "./pages/Sales/Sales";
// import ListWithUs from "../pages/listWithUs";
import Management from "./pages/Management/Management";
import Concierge from "./pages/Concierge/Concierge";
import Root from "./Component/Root";
import ListWithUs from "./pages/ListWithUs/ListWithUs";

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
