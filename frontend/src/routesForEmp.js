import React from "react";

// Emp Imports

import MainDashboard from "views/emp/default";
import ProjectsPage from "views/emp/projects";
import Profile from "views/emp/profile";
import DataTables from "views/emp/tables";



// Auth Imports


// Icon Imports
import {
  MdHome,
  MdPerson,
} from "react-icons/md";

import { GoProjectRoadmap } from "react-icons/go";
import { LuKanbanSquare } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import KanbanBoard from "views/emp/kanban";
import CalendarPage from "views/calendar";



const routesForEmp = [
  {
    name: "Dashboard",
    layout: "/emp",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Projects",
    layout: "/emp",
    path: "projects",
    icon: <GoProjectRoadmap className="h-6 w-6" />,
    component: <ProjectsPage />,
    secondary: true,
  },
  {
    name: "Work Board",
    layout: "/emp",
    icon: <LuKanbanSquare className="h-6 w-6" />,
    path: "work-board",
    component: <KanbanBoard />,
  },
  {
    name: "Calendar",
    layout: "/emp",
    icon: <FaRegCalendarAlt className="h-6 w-6" />,
    path: "calendar",
    component: <CalendarPage />,
  },
  {
    name: "Teams",
    layout: "/emp",
    icon: <IoPeopleOutline className="h-6 w-6" />,
    path: "teams",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/emp",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },

];
export default routesForEmp;
