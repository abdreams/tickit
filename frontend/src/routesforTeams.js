import React from "react";

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
  
  export default routesForTeams;
  