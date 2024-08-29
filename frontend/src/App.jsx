import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import EmpLayout from "layouts/emp";
import AuthLayout from "layouts/auth";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="emp/*" element={<EmpLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />  
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
    );
};

export default App;
