import React from "react";

// Project Imports
import ProjectsPage from "views/task/projects";
import Profile from "views/task/profile";
import DataTables from "views/task/tables";

import { MdHome, MdPerson } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { LuKanbanSquare } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";

import KanbanBoard from "views/task/kanban";
import CalendarPage from "views/calendar";
import TasksPage from "views/task/tasks";
import AddNewProject from "views/task/projects/addNewProject";
import ProjectDashboard from "views/task/dashboard";

const routesForProj = [
  {
    name: "Dashboard",
    layout: "/task",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <ProjectDashboard />,
  },
  {
    name: "Projects",
    layout: "/task",
    path: "projects",
    icon: <GoProjectRoadmap className="h-6 w-6" />,
    component: <ProjectsPage />,
    secondary: true,
    hidden: true,
  },
  {
    name: "Work Board",
    layout: "/task",
    path: "work-board",
    icon: <LuKanbanSquare className="h-6 w-6" />,
    component: <KanbanBoard />,
  },
  {
    name: "Calendar",
    layout: "/task",
    path: "calendar",
    icon: <FaRegCalendarAlt className="h-6 w-6" />,
    component: <CalendarPage />,
  },
  {
    name: "Tasks",
    layout: "/task",
    path: "tasks",
    icon: <MdOutlineTaskAlt className="h-6 w-6" />,
    component: <TasksPage />,
  },
  {
    name: "Teams",
    layout: "/task",
    path: "teams",
    icon: <IoPeopleOutline className="h-6 w-6" />,
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/task",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Add New Project",
    layout: "/task",
    path: "projects/new",
    component: <AddNewProject />,
    secondary: true,
    hidden: true,
  },
  // {
  //   name: "test",
  //   layout: "/project",
  //   path: "test",
  //   component: <CustomWorkflow />,
  //   // secondary: true,
  //   // hidden: true,
  // },
];

export default routesForProj;
