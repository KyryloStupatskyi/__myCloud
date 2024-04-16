import Home from "../pages/Home"

export const authRoutes = [
  {
  }
]

export const publicRoutes = [
  {
    path: process.env.REACT_APP_HOME_ROUTE,
    element: <Home />
  }
]