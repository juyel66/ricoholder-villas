import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import Rents from "./pages/Rents/Rents";
import Sales from "./pages/Sales/Sales";
import Management from "./pages/Management/Management";
import Concierge from "./pages/Concierge/Concierge";
import Root from "./Component/Root";
import ListWithUs from "./pages/ListWithUs/ListWithUs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import RentsDetails from "./pages/Rents/RentsDetails";
import Login from "./pages/Authentications/Login";
import SignUpPage from "./pages/Authentications/Register";

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
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/RentsDetails", element: <RentsDetails /> },   
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <SignUpPage /> },
]);
