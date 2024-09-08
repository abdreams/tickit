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
import { MdOutlineTaskAlt } from "react-icons/md";

import KanbanBoard from "views/emp/kanban";
import CalendarPage from "views/calendar";
import TasksPage from "views/emp/tasks";
import AddNewProject from "views/emp/projects/addNewProject";
import EmployeeDashboard from "views/emp/dashboard";
import AddNewTask from "views/project/tasks/AddNewTask";
import AddNewSubTask from "views/task/tasks/AddNewSubTask";



const routesForEmp = [
  {
    name: "Dashboard",
    layout: "/emp",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <EmployeeDashboard />,
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
    name: "Tasks",
    layout: "/emp",
    icon: <MdOutlineTaskAlt className="h-6 w-6" />,
    path: "tasks",
    component: <TasksPage />,
  },
  // {
  //   name: "Teams",
  //   layout: "/emp",
  //   icon: <IoPeopleOutline className="h-6 w-6" />,
  //   path: "teams",
  //   component: <DataTables />,
  // },
  {
    name: "Profile",
    layout: "/emp",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "add new project",
    layout: "/emp",
    path: "/projects/new",
    // icon: <MdLock className="h-6 w-6" />,
    component: <AddNewProject />,
    secondary: true,
    hidden: true, 
  },
  {
    name: "add new task",
    layout: "/emp",
    path: "/tasks/new",
    // icon: <MdLock className="h-6 w-6" />,
    component: <AddNewTask />,
    secondary: true,
    hidden: true, 
  },
  {
    name: "add new subtask",
    layout: "/emp",
    path: "/subtasks/new",
    // icon: <RiAttachment2 className="h-6 w-6" />,
    secondary: true,
    component: <AddNewSubTask />,
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
export default routesForEmp;
