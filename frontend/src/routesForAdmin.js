import React from "react";

// Admin Imports

// import MainDashboard from "views/admin/default";
import Dashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
// import DataTables from "views/admin/tables";
import  UserManagement from "views/admin/usermanagement"
import TeamManagement from "views/admin/teammanagement";
// import RTLDefault from "views/rtl/default";
import MyCalendar from "views/admin/calendar";



// Icon Imports
import {
  MdHome,
  MdPerson,
} from "react-icons/md";

import { GoProjectRoadmap } from "react-icons/go";
// import { LuKanbanSquare } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
// import { IoPeopleOutline } from "react-icons/io5";

// import { Calendar } from "react-calendar";
import { HiUserGroup } from "react-icons/hi";
import { LuUser2 } from "react-icons/lu";



const routesForAdmin = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Projects",
    layout: "/admin",
    path: "projects",
    icon: <GoProjectRoadmap className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  // {
  //   name: "Work Board",
  //   layout: "/admin",
  //   icon: <LuKanbanSquare className="h-6 w-6" />,
  //   path: "work-board",
  //   component: <DataTables />,
  // },
  {
    name: "User Management",
    layout: "/admin",
    icon: <LuUser2 className="h-6 w-6" />,
    path: "user-management",
    component: <UserManagement />,
  },
  {
    name: "Team Management",
    layout: "/admin",
    icon: <HiUserGroup className="h-6 w-6" />,
    path: "team-management",
    component: <TeamManagement />,
  },
  {
    name: "Calendar",
    layout: "/admin",
    icon: <FaRegCalendarAlt className="h-6 w-6" />,
    path: "calendar",
    // component: <Calendar />,
    component: <MyCalendar />,
  },
  // {
  //   name: "Teams",
  //   layout: "/admin",
  //   icon: <IoPeopleOutline className="h-6 w-6" />,
  //   path: "teams",
  //   component: <DataTables />,
  // },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
//   {
//     name: "Sign In",
//     layout: "/auth",
//     path: "sign-in",
//     icon: <MdLock className="h-6 w-6" />,
//     component: <SignIn />,
//   },
//   {
//     name: "Sign Up",
//     layout: "/auth",
//     path: "sign-up",
//     icon: <MdLock className="h-6 w-6" />,
//     component: <SignUp />,
//   },
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

export default routesForAdmin;