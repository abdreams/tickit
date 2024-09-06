import React from "react";


import DataTables from "views/task/tables";

import { MdHome, MdPerson } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { LuKanbanSquare } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";



import KanbanBoard from "views/task/kanban";
import CalendarPage from "views/calendar";
import TasksPage from "views/task/tasks";
import AddNewProject from "views/task/projects/addNewProject";
import ProjectDashboard from "views/task/dashboard";

const routesForTask = [
  {
    name: "Dashboard",
    layout: "/task",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <ProjectDashboard />,
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
    name: "Documentation",
    layout: "/task",
    path: "teams",
    icon: <IoDocumentTextOutline className="h-6 w-6" />,
    component: <DataTables />,
  },
  {
    name: "Attachments",
    layout: "/task",
    path: "tasks",
    icon: <RiAttachment2 className="h-6 w-6" />,
    component: <TasksPage />,
  },
  

];

export default routesForTask;
