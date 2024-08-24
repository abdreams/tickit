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
<<<<<<< HEAD
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
=======
      <Route path="/" element={<Navigate to="/auth" replace />} />
>>>>>>> 14fdd720b1efa8f3346541eca94934d3cb6a963c
    </Routes>
  );
};

export default App;
