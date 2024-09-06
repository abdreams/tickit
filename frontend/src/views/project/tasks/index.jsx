import React, { useState, useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { AiOutlinePlus } from "react-icons/ai";
import taskData from "../../../data/tasks.json";
import { Doughnut } from "react-chartjs-2";
import moment from "moment"; // for date handling
import { FaCircle } from "react-icons/fa";
import TimeTracking from "./components/TimeTracking";
import ProgressDonut from "./components/ProgressDonut";

const TasksPage = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [expandedRows, setExpandedRows] = useState([]); // For managing expanded rows

  const toggleRowExpansion = (rowIndex) => {
    setExpandedRows((prev) =>
      prev.includes(rowIndex)
        ? prev.filter((i) => i !== rowIndex)
        : [...prev, rowIndex]
    );
  };

  // Utility function to calculate time remaining
  const getTimeRemaining = (deadline) => {
    const now = moment();
    const deadlineTime = moment(deadline);
    const duration = moment.duration(deadlineTime.diff(now));

    const days = Math.floor(duration.asDays());
    const hours = Math.floor(duration.asHours() % 24);
    const minutes = Math.floor(duration.asMinutes() % 60);

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ${hours} hour${
        hours !== 1 ? "s" : ""
      }`;
    } else if (hours > 0) {
      return `${hours} hour${hours !== 1 ? "s" : ""}`;
    } else {
      return `${minutes} min${minutes !== 1 ? "s" : ""}`;
    }
  };

  const data = useMemo(
    () =>
      taskData.filter(
        (task) =>
          (statusFilter === "" || task.status === statusFilter) &&
          (priorityFilter === "" || task.priority === priorityFilter)
      ),
    [statusFilter, priorityFilter]
  );

  const columns = useMemo(
    () => [
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Task Name
          </p>
        ),
        accessor: "task_name",
      },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Status
          </p>
        ),
        accessor: "status",
      },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Priority
          </p>
        ),
        accessor: "priority",
      },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Assigned By
          </p>
        ),
        accessor: "assigned_by",
      },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Time Remaining
          </p>
        ),
        accessor: "deadline_time",
        Cell: ({ value }) => {
          const remainingTime = getTimeRemaining(value);
          const isLessThan2Hours = moment(value).diff(moment(), "hours") < 2;

          return (
            <span style={{ color: isLessThan2Hours ? "red" : "inherit" }}>
              {remainingTime}
            </span>
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setGlobalFilter,
    state: { pageIndex, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const projectHealth = {
    labels: [
      "Completion Ratio",
      "Risk Factor",
      "Team Sentiment",
      "Time Management",
    ],
    datasets: [
      {
        data: [60, 15, 15, 10],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#8e44ad"],
      },
    ],
  };
  const healthStatus = "good"; // Set the health status here
  const getHealthColor = (status) => {
    switch (status) {
      case "good":
        return "text-green-500 "; // Green circle for good health
      case "warning":
        return "text-yellow-500"; // Yellow circle for warning
      case "bad":
        return "text-red-500"; // Red circle for bad health
      default:
        return "text-gray-500"; // Gray circle for unknown/default health
    }
  };

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
                        : " "}
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
                    className="cursor-pointer border-b border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-navy-700"
                    onClick={() => toggleRowExpansion(i)}
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-4 py-2 dark:text-white"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                  {expandedRows.includes(i) && (
                    <tr className="expanded-content bg-white dark:bg-navy-800">
                      <td colSpan={5} className="p-4">
                        <div className="flex space-x-4">
                          {/* Task Description */}
                          <div className="w-1/2">
                            <h3 className="text-sm font-bold">
                              Description:{" "}
                            </h3>
                            <p className="text-sm">
                              {row.original.description ||
                                "No description available."}
                            </p>
                            <br />
                            <p className="text-sm font-bold">
                              Number of subtasks:{" "}
                              {row.original.subtasks || "N/A"}
                            </p>
                          </div>

                          {/* Project Health */}

                          <div className="w-1/8">
                            <p className="text-sm font-bold">Health: </p>
                            <div className="flex gap-x-2 mt-1">
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
                       
                          <p className="text-sm font-bold mb-2">Time Tracking: </p>
                          <TimeTracking loggedHours={3} overEstimateHours={1} remainingHours={3} />
                          </div>

                          

                          {/* Progress (Chart.js Donut) */}
                          <div className="w-1/8 ">
                            <h3 className="text-sm font-bold mb-2">Progress: </h3>
                            <ProgressDonut progress={80} />
                          </div>
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
          className="cursor-pointer rounded-md border bg-gray-100 p-2 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-navy-800 dark:text-white"
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
          className="cursor-pointer rounded-md border bg-gray-100 p-2 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-navy-800 dark:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TasksPage;
