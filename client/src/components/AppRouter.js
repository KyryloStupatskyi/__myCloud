import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { authRoutes, publicRoutes } from "../utils/routes"

const AppRouter = () => {
  const _isAuth = false
  return (
    <Routes>
      {_isAuth && authRoutes.map(({ path, element }) =>
        <Route path={path} element={element} key={path} />
      )}

      {publicRoutes.map(({ path, element }) =>
        <Route path={path} element={element} key={path} />
      )}

      {/*  Redirect Route  */}
      {/* <Route path="*" element={<Navigate to="/home" replace />} /> */}
    </Routes>
  )
}
export default AppRouter