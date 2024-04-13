import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Prototype from "pages/Prototype";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "prototype",
      element: <Prototype />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
