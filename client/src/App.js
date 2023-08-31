import React from "react";
import "./index.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Route,
} from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recover from "./pages/Recover";
import ProductsList from "./pages/ProductsList";

import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";

const Layout = ({ showFooter }) => {
  return (
    <div>
      <ChakraProvider>
        <Header />
        <Outlet />
        {showFooter && <Footer />}
      </ChakraProvider>
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout showFooter={true} />,
      children: [
        {
          path: "shop",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "recover",
          element: <Recover />,
        },
        {
          path: "category/women",
          element: <ProductsList />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Layout showFooter={false} />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
