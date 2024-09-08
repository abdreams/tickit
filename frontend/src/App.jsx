import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import EmpLayout from "layouts/emp";
import AuthLayout from "layouts/auth";
import ProjLayout from "layouts/project";
import TaskLayout from "layouts/task";

import "react-big-calendar/lib/css/react-big-calendar.css";
// import SignIn from "views/auth/SignIn";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isAuthenticated } = useAuth0();
  
  
  console.log(isAuthenticated)
  return (
    <Routes>
      <Route path="auth/*" element={ <AuthLayout />} />
      <Route path="admin/*" element={ <AdminLayout /> } />
      <Route path="emp/*" element={<EmpLayout />  }  />
      <Route path="project/:projectId/*" element={ <ProjLayout /> }  /> 
      <Route path="task/:taskId/*" element= { <TaskLayout /> }  /> 
      <Route path="task/*" element= { <TaskLayout /> }  /> 
      <Route path="rtl/*" element={<RtlLayout />  }  />
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
      {/* <Route path="/" element={<SignIn />} /> */}
    </Routes>
  );
};

export default App;
