import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/Signin",
    element: <Signin />,
  },
    {
    path: "/Signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);