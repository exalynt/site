import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Engineering from "./pages/Engineering";
import Writing from "./pages/Writing";
import Projects from "./pages/Projects";
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
      { path: "/engineering", element: <Engineering /> },
      { path: "/writing", element: <Writing /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
