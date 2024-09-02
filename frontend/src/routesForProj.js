import React from "react";

// Project Imports
import MainDashboard from "views/project/default";
import ProjectsPage from "views/project/projects";
import Profile from "views/project/profile";
import DataTables from "views/project/tables";

import { MdHome, MdPerson } from "react-icons/md";
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
    path: ":projectId/default",
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
    path: ":projectId/work-board",
    icon: <LuKanbanSquare className="h-6 w-6" />,
    component: <KanbanBoard />,
  },
  {
    name: "Calendar",
    layout: "/project",
    path: ":projectId/calendar",
    icon: <FaRegCalendarAlt className="h-6 w-6" />,
    component: <CalendarPage />,
  },
  {
    name: "Tasks",
    layout: "/project",
    path: ":projectId/tasks",
    icon: <MdOutlineTaskAlt className="h-6 w-6" />,
    component: <TasksPage />,
  },
  {
    name: "Teams",
    layout: "/project",
    path: ":projectId/teams",
    icon: <IoPeopleOutline className="h-6 w-6" />,
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/project",
    path: ":projectId/profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Add New Project",
    layout: "/project",
    path: "projects/new",
    component: <AddNewProject />,
    secondary: true,
    hidden: true,
  },
];

export default routesForProj;
