import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const SpringRoot = () => {
  return (
    <div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#eee",
          display: "flex",
          gap: "10px",
        }}
      >
        <div>
          <Link to="/spring/learn">Learn</Link>
        </div>
        <div>
          <Link to="/spring/api">Api</Link>
        </div>
        <div>
          <Link to="/spring/doc">Doc</Link>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "spring",
    element: <SpringRoot />,
    children: [
      {
        index: true,
        element: <div>spring main page</div>,
      },
      {
        path: "api",
        element: <div>api page</div>,
      },
      {
        path: "doc",
        element: <div>doc page</div>,
      },
      {
        path: "learn",
        element: <div>learn page</div>,
      },
    ],
  },
]);
function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
