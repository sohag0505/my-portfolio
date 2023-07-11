import { createBrowserRouter } from "react-router-dom";
import Contact from "../page/Home/Home/Contact/Contact";
import Home from "../page/Home/Home/Home";
import Work from "../page/Home/Home/work/Work";

import About from "../page/Home/Home/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/myWork",
    element: <Work></Work>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);

export default router;
