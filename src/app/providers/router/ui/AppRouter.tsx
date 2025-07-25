import { Route, Routes } from "react-router-dom";
import { MainPage } from "@/pages/main";
import { routeConfig } from "../config/routeConfig";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
