import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BoardAdd } from "./BoardAdd.jsx";
import { BoardEdit } from "./BoardEdit.jsx";
import { BoardList } from "./BoardList.jsx";

// router
const router = createBrowserRouter([
  {
    path: "/add",
    element: <BoardAdd />,
  },
  {
    path: "/edit",
    element: <BoardEdit />,
  },
  {
    path: "list",
    element: <BoardList />,
  },
  {
    path: "/board",
    children: [
      {
        path: "write",
        element: <div>board write</div>,
      },
      {
        path: "edit",
        element: <div>board edit</div>,
      },
    ],
  },
]);
function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
