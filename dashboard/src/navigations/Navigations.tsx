import routes from "./initRoutes";
import { useRoutes } from "react-router-dom";

export const Navigations = () => {
  const nav = useRoutes(routes);
  return nav;
};
