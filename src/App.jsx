import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const SpringRoot = () => {
  return (
    <div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#eee",
        }}
      >
        NavBar
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
