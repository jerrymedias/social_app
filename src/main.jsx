import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Auth from "./Pages/Auth/Auth.jsx";
import HomeFeed from "./Pages/HomeFeed/HomeFeed.jsx";

const router = createBrowserRouter([
  {
    path: "/social_app/",
    element: <App />,
    children: [
      {
        path: "/social_app/login",
        element: (
          <div style={{ height: "100vh" }}>
            <Auth />
          </div>
        ),
      },
      {
        path: "/social_app/home-feed",
        element: <HomeFeed />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
