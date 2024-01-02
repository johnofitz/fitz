import React from "react";
import Root from "./Pages/Root";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import ProjectPage from "./Pages/ProjectPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResumePage from "./Pages/ResumePage";
import AboutPage from "./Pages/AboutPage";



const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectPage/>},
      { path: 'resume', element: <ResumePage/>},
      { path: 'about', element: <AboutPage/>},
      // Add more child routes if needed
    ],
  },
  // Add more top-level routes if needed
];

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;


