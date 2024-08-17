import React from "react";

// Admin Imports
import EmpMainDashboard from "views/emp/default";

import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";


// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdPerson,
  MdLock,
} from "react-icons/md";

import { GoProjectRoadmap } from "react-icons/go";
import { LuKanbanSquare } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { Calendar } from "react-calendar";


const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Projects",
    layout: "/admin",
    path: "projects",
    icon: <GoProjectRoadmap className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Work Board",
    layout: "/admin",
    icon: <LuKanbanSquare className="h-6 w-6" />,
    path: "work-board",
    component: <DataTables />,
  },
  {
    name: "Calendar",
    layout: "/admin",
    icon: <FaRegCalendarAlt className="h-6 w-6" />,
    path: "calendar",
    component: <Calendar />,
  },
  {
    name: "Teams",
    layout: "/admin",
    icon: <IoPeopleOutline className="h-6 w-6" />,
    path: "teams",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "emp test",
    layout: "/emp",
    path: "test",
    icon: <MdLock className="h-6 w-6" />,
    component: <EmpMainDashboard />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
];
export default routes;
