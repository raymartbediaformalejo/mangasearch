import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import MangaSinglePage from "./pages/MangaSingle";
import RecommendationPage from "./pages/RecommendationPage";
import SearchPage from "./pages/SearchPage";
import TopMangaPage from "./pages/TopMangaPage";

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
    },
    {
      path: "/topmanga",
      element: <TopMangaPage />,
    },
    {
      path: "/recommendation",
      element: <RecommendationPage />,
    },
    {
      path: "/aboutus",
      element: <TopMangaPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
