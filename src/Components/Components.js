import React from "react";
import HomeModule from "./Home/Home.js";
import DuncanModule from "./Duncan/Duncan.js";
import NavigationModule from "./Navigation/Navigation";

import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
// import BrowserRouter as alias
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";

const Components = () => {
  return (
    <Router>
      <NavigationModule />
      <Routes>
        {/* Home Page - page 1 */}
        {/* <Route path="/" element={<HomeModule />} /> */}


        {/* Duncan menu page - page 2 */}
        <Route 
          path="/Duncan" 
          element={<ProtectedRoute path="/" element={DuncanModule} />}
        />
        {/* Auth page */}
        <Route path="/auth" element={<AuthModule />} />
        {/* Auth/register page */}
        <Route path="/auth/register" element={<AuthRegister />} />
        {/* Auth/login page */}
        <Route path="/auth/login" element={<AuthLogin />} />
        {/* Can only access Home page via login; is protected */}
        <Route
          path="/"
          element={<ProtectedRoute path="/" element={HomeModule} />}
        />
        {/* Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;
