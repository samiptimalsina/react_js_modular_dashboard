import LandingLayout from "../../layouts/LandingLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const landingRoutes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> } ,    // loads at "/"
      { path: "about", element: <About /> },    // loads at "/about"
      { path: "services", element: <Services /> }, // loads at "/services"
      { path: "contact", element: <Contact /> },   // loads at "/contact"
    ],
  },
];

export default landingRoutes;
