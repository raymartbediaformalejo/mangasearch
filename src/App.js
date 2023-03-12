import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import MangaSinglePage, {
  loader as mangaSingleLoader,
} from "./pages/MangaSingle";
import SearchPage from "./pages/SearchPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "manga/:mangaId",
      element: <MangaSinglePage />,
      // loader: mangaSingleLoader,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
