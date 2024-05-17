import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const BoardList = () => {
  return (
    <div>
      <div>no 1</div>
      <div>no 2</div>
      <div>no 3</div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <div>Main Page</div>,
      },
      {
        path: "board",
        element: <div>Board Page</div>,
      },
      {
        path: "list",
        element: <BoardList />,
      },
    ],
  },
]);
function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
