import React from "react";
import { Route, Routes } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import Buy from "./pages/Buy";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Onbording/Login";
import Signup from "./pages/Onbording/Signup";
import ButtonForLogin from "./pages/Onbording/buttonforlogin";




const App = () => {
  return (
    <Routes >
      <Route path="/" element={<ButtonForLogin />} />

      {/* Login and Signup Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/buy" element={<Buy />} />


      <Route element={<RootLayout />}>
        {/* Home Page with Login and Signup Buttons */}


        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Fallback for 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
