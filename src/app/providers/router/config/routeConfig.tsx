import { LoginPage } from "@/pages/login";
import { MainPage } from "@/pages/main";
import { RegisterPage } from "@/pages/register";
import type { RouteProps } from "react-router-dom";

export const enum AppRoutes {
  MAIN = "main",
  LOGIN = "login",
  REGISTER = "register",
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.REGISTER]: "/register",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <MainPage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutesPath.login,
    element: <LoginPage />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutesPath.register,
    element: <RegisterPage />,
  },
};
