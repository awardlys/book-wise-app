import { Home } from "@/pages/home";
import { LayoutHome } from "@/pages/layout/layout-home";
import { LayoutSignIn } from "@/pages/layout/layout-sign-in";
import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/sign-in";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSignIn />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/home",
    element: <LayoutHome />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
