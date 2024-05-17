import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/board">Board</Link>
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
      <div>
        <Link to="/board?id=1">no 1</Link>
      </div>
      <div>
        <Link to="/board?id=2">no 2</Link>
      </div>
      <div>
        <Link to="/board?id=3">no 3</Link>
      </div>
    </div>
  );
};

const BoardView = () => {
  // query string
  const [params] = useSearchParams();
  return <div>{params.get("id")}번 게시물 보기</div>;
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
        element: <BoardView />,
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
