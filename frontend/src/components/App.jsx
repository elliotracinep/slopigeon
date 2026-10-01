import MainPage from "./MainPage/MainPage.jsx"
import RootLayout from "./containers/RootLayout.jsx"
import ErrorPage from "./containers/ErrorPage.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> }
    ]
  }

]);

const App = () => {

  return (
    <RouterProvider router={router} />
  )
};

export default App;
