import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Philosophy from "./pages/Philosophy";
import Projects from "./pages/Projects";
import WorkWithUs from "./pages/WorkWithUs";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
