import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// router
const router = createBrowserRouter([
  {
    path: "/add",
    element: <div>add page</div>,
  },
  {
    path: "/edit",
    element: <div>edit page</div>,
  },
  {
    path: "list",
    element: <div>list page</div>,
  },
]);
function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
