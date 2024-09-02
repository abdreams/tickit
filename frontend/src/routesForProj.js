import React from "react";

// project Imports

import MainDashboard from "views/project/default";
import ProjectsPage from "views/project/projects";
import Profile from "views/project/profile";
import DataTables from "views/project/tables";



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
import { MdOutlineTaskAlt } from "react-icons/md";

import KanbanBoard from "views/project/kanban";
import CalendarPage from "views/calendar";
import TasksPage from "views/project/tasks";
import AddNewProject from "views/project/projects/addNewProject";



const routesForProj = [
  {
    name: "Dashboard",
    layout: "/project",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Projects",
    layout: "/project",
    path: "projects",
    icon: <GoProjectRoadmap className="h-6 w-6" />,
    component: <ProjectsPage />,
    secondary: true,
  },
  {
    name: "Work Board",
    layout: "/project",
    icon: <LuKanbanSquare className="h-6 w-6" />,
    path: "work-board",
    component: <KanbanBoard />,
  },
  {
    name: "Calendar",
    layout: "/project",
    icon: <FaRegCalendarAlt className="h-6 w-6" />,
    path: "calendar",
    component: <CalendarPage />,
  },
  {
    name: "Tasks",
    layout: "/project",
    icon: <MdOutlineTaskAlt className="h-6 w-6" />,
    path: "tasks",
    component: <TasksPage />,
  },
  {
    name: "Teams",
    layout: "/project",
    icon: <IoPeopleOutline className="h-6 w-6" />,
    path: "teams",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/project",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "add new project",
    layout: "/project",
    path: "/projects/new",
    // icon: <MdLock className="h-6 w-6" />,
    component: <AddNewProject />,
    secondary: true,
    hidden: true, 
  },

  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routesForProj;
