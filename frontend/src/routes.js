import React from "react";
import { MdLock } from "react-icons/md";




// import RTLDefault from "views/rtl/default";


// Auth Imports
import SignIn from "views/auth/SignIn";
import SignUp from "views/auth/SignUp";



const routes = [
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignUp />,
  },
  // {
  //   name: "emp test",
  //   layout: "/emp",
  //   path: "test",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <EmpMainDashboard />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
