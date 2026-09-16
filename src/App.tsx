import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Philosophy from "./pages/philosophy/Philosophy";
import Projects from "./pages/projects/Projects";
import WorkWithUs from "./pages/work-with-us/WorkWithUs";
import About from "./pages/about/About";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Layout />
        <ScrollRestoration />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/philosophy", element: <Philosophy /> },
      { path: "/projects", element: <Projects /> },
      { path: "/work-with-us", element: <WorkWithUs /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
