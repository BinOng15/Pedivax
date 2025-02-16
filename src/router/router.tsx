import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import AppRouter from "./AppRouter";
import Homepage from "../pages/Customer/Homepage";
import { ROLES } from "../constants";
import { AuthWrapper } from "../context/auth.context";
import Introductionpage from "../pages/Customer/Introductionpage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <AppRouter element={Homepage} allowedRoles={[ROLES.CUSTOMER]} />
        ),
      },
      {
        path: "/Introduction",
        element: (
          <AppRouter
            element={Introductionpage}
            allowedRoles={[ROLES.CUSTOMER]}
          />
        ),
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

const RouterComponent: React.FC = () => {
  return (
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  );
};

export default RouterComponent;
