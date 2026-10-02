import MainPage from "./MainPage/MainPage.jsx"
import LoginForm from "./LoginPage/LoginForm.jsx"
import LogoutForm from "./LogoutPage/LogoutForm.jsx"
import RootLayout from "./containers/RootLayout.jsx"
import ErrorPage from "./containers/ErrorPage.jsx"

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useCallback, useState } from "react";
import { AuthContext } from "../context/app-context.js";

const routerLoggedIn = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/home", element: <MainPage /> },
      { path: "/logout", element: <LogoutForm /> },
      { path: "/login", element: <Navigate to="/home" replace /> },
      { path: "/register", element: <Navigate to="/home" replace /> },
      // { path: "/:accountID", element: <Navigate to="/home" replace /> } // à coder

    ]
  }

]);

const routerLoggedOut = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/home", element: <MainPage /> },
      { path: "/login", element: <LoginForm /> },
      // { path: "/logout", element: <Navigate to="/home" replace /> }, garder
      { path: "/logout", element: <LogoutForm /> }

      // { path: "/register", element: </> }, // à coder
      // { path: "/:accountID", element: </> } // à coder
    ]
  }

]);

const App = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(false);
  const storedIsLoggedIn = sessionStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(
    storedIsLoggedIn === "true" ? true : false,
  );

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
    sessionStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
    console.log("connecté!!")
  }, []);
  const logout = useCallback(() => {
    sessionStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
    setToken(null);
    setUserId(null);
    console.log("déconnecté!!")
  }, []);

  if (token !== null && isLoggedIn) {
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn: true,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <RouterProvider router={routerLoggedIn} />
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn: false,
          token: null,
          userId: null,
          login: login,
        }}
      >
        <RouterProvider router={routerLoggedOut} />
      </AuthContext.Provider>
    );
  }
};

export default App;
