import React, { useState, useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { AiOutlinePlus } from "react-icons/ai";
import taskData from "../../../../data/tasks.json";
import TaskModal from "./modal";

const SubTasksTable = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = useMemo(
    () =>
      taskData.filter(
        (task) =>
          (statusFilter === "" || task.status === statusFilter) &&
          (priorityFilter === "" || task.priority === priorityFilter)
      ),
    [statusFilter, priorityFilter]
  );

  const handleCardClick = (task) => {
    console.log(task);
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const columns = useMemo(
    () => [
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Sub-Task Name
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
            Deadline Time
          </p>
        ),
        accessor: "deadline_time",
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
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="cursor-pointer border-b border-gray-200 transition duration-200 ease-in-out hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-navy-700"
                  onClick={() => handleCardClick(row.original)} // Pass the task object to the handler
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
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="rounded-md border bg-gray-100 p-2 dark:border-gray-700 dark:bg-navy-800 dark:text-white cursor-pointer disabled:cursor-not-allowed"
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
          className="rounded-md border bg-gray-100 p-2 dark:border-gray-700 dark:bg-navy-800 dark:text-white cursor-pointer disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      <TaskModal
        task={selectedTask} // Pass the sub-task name to the modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SubTasksTable;
