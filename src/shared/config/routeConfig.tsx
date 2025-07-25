import type { RouteProps } from "react-router-dom";
import MainPage from '../../pages/main/ui/MainPage';

const enum AppRoutes {
  MAIN = "main",
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <MainPage />,
  },
};
