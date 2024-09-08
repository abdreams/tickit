import React, { useState, useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { AiOutlinePlus } from "react-icons/ai";
import taskData from "../../../data/tasks.json";
import { FaCircle } from "react-icons/fa"; // Assuming you're using FontAwesome for icons
import TimeTracking from "./components/TimeTracking";
import ProgressDonut from "./components/ProgressDonut";


const TasksPage = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [expandedRows, setExpandedRows] = useState([]); // For managing expanded rows

  // Table setup using React Table hooks
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter, // Provided by useGlobalFilter
    state: { globalFilter, pageIndex }, // Extract state from hooks
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
  } = useTable(
    {
      columns: useMemo(
        () => [
          {
            Header: "Task Name",
            accessor: "task_name",
          },
          {
            Header: "Project Name",
            accessor: "project_name",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Priority",
            accessor: "priority",
          },
          {
            Header: "Assigned By",
            accessor: "assigned_by",
          },
          {
            Header: "Deadline Time",
            accessor: "deadline_time",
          },
          {
            Header: "Assigned At Time",
            accessor: "assigned_at_time",
          },
        ],
        []
      ),
      data: useMemo(
        () =>
          taskData.filter(
            (task) =>
              (statusFilter === "" || task.status === statusFilter) &&
              (priorityFilter === "" || task.priority === priorityFilter)
          ),
        [statusFilter, priorityFilter]
      ),
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const toggleRowExpansion = (index) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getHealthColor = (status) => {
    if (status === "good") return "text-green-500";
    if (status === "warning") return "text-yellow-500";
    if (status === "bad") return "text-red-500";
    return "text-gray-500";
  };

  const projects = [
    {
      name: "UX research",
      progress: 100,
      deadline: "Aug 22, 2023",
      users: ["https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg", "https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg"],
    },
    {
      name: "Design",
      progress: 80,
      deadline: "Aug 22, 2023",
      users: ["https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg", "https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg"],
    },
    {
      name: "Design System",
      progress: 80,
      deadline: "Aug 22, 2023",
      users: ["https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg", "https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg"],
    },
    {
      name: "Development",
      progress: 28,
      deadline: "Aug 22, 2023",
      users: ["https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg", "https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg"],
    },
  ];
  

  const healthStatus = "good"; // You should determine this based on some logic

  return (
    <div className="p-4 md:p-8">
      <div className="mb-4 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <input
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-full rounded-md border p-2 dark:border-gray-700 dark:bg-navy-800 dark:text-white md:w-1/3"
          placeholder="Search tasks..."
        />
        <div className="flex w-full space-x-4 md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full rounded-md border p-2 dark:border-gray-700 dark:bg-navy-800 dark:text-white md:w-auto"
          >
            <option value="">Filter by Status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="w-full rounded-md border p-2 dark:border-gray-700 dark:bg-navy-800 dark:text-white md:w-auto"
          >
            <option value="">Filter by Priority</option>
            <option value="Urgent">Urgent</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button className="flex w-full items-center rounded-md bg-blue-600 px-4 py-2 text-white md:w-auto">
          <AiOutlinePlus className="mr-2" />
          Add New Task
        </button>
      </div>

      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full bg-white dark:bg-navy-800"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="cursor-pointer px-4 py-2 text-left dark:text-white"
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <React.Fragment key={i}>
                  <tr
                    {...row.getRowProps()}
                    className="cursor-pointer border-b border-gray-200 transition duration-200 ease-in-out hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-navy-700"
                    onClick={() => toggleRowExpansion(i)}
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="whitespace-nowrap px-4 py-2 dark:text-white"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                  {expandedRows.includes(i) && (
                    <tr className="expanded-content border-b bg-white shadow-md dark:bg-navy-800">
                      <td colSpan={7} className="p-4">
                        <div className="flex space-x-6">
                          {/* Task Description */}
                          <div className="w-1/2">
                            <h3 className="text-sm font-bold">Description: </h3>
                            <p className="text-sm ">
                              {row.original.description ||
                                "No description available."}
                            </p>
                            <br />
        
                          <div className="flex gap-x-2 -mt-2 mb-2">
                              <p className="text-sm font-bold">Assignees: </p>
                              <div className="flex -space-x-2 ">
                              {projects.map((project, index) => project.users.map((user, userIndex) => (
                                <img
                                  key={userIndex}
                                  src={user}
                                  alt="User Avatar"
                                  className="w-6 h-6 rounded-full border-2 border-white shadow"
                                />
                              )))}
                            </div>
                            </div>
                            <p className="text-sm font-bold">
                              Number of tasks:{" "}
                              {row.original.tasks || "N/A"}
                            </p>
                          </div>

                          {/* Project Health */}
                          <div className="w-1/8">
                            <p className="text-sm font-bold">Health: </p>
                            <div className="mt-1 flex gap-x-2">
                              <FaCircle
                                className={getHealthColor(healthStatus)}
                              />
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                {healthStatus === "good" && "Healthy"}
                                {healthStatus === "warning" && "At Risk"}
                                {healthStatus === "bad" && "Critical"}
                                {!["good", "warning", "bad"].includes(
                                  healthStatus
                                ) && "Unknown"}
                              </span>
                            </div>
                          </div>

                          {/* Time Tracking */}
                          <div className="w-1/4 px-6">
                            <p className="mb-4 text-sm font-bold">
                              Time Tracking:{" "}
                            </p>
                            <TimeTracking
                              loggedHours={3}
                              overEstimateHours={1}
                              remainingHours={3}
                            />
                          </div>

                          {/* Progress (Chart.js Donut) */}
                          <div className="w-1/8 ">
                            <h3 className="mb-2 text-sm font-bold">
                              Progress:{" "}
                            </h3>
                            <ProgressDonut progress={80} />
                          </div>
                          {/* Open in new tab icon */}
                          <svg
                            className="cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            onClick={() =>
                              window.open(
                                `/project/${row.original.taskId}/default`,
                                "_blank"
                              )
                            }
                          >
                            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
                          </svg>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="rounded-md border bg-gray-100 p-2 dark:border-gray-700 dark:bg-navy-800 dark:text-white"
        >
          Previous
        </button>
        <span className="dark:text-white">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="rounded-md border bg-gray-100 p-2 dark:border-gray-700 dark:bg-navy-800 dark:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TasksPage;
