import React, { useState, useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { AiOutlinePlus } from "react-icons/ai";
import projectData from "src/data/projects.json";

const ProjectsPage = () => {
  const data = useMemo(() => projectData, []);
  const columns = useMemo(
    () => [
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Project Name
          </p>
        ),
        accessor: "project_name",
      },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Description
          </p>
        ),
        accessor: "description",
      },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Start Date
          </p>
        ),
        accessor: "start_date",
      },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            End Date
          </p>
        ),
        accessor: "end_date",
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
            Created By
          </p>
        ),
        accessor: "created_by",
      },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Number of Tasks
          </p>
        ),
        accessor: "number_of_tasks",
      },
    ],
    []
  );

  const [statusFilter, setStatusFilter] = useState("");
  const [createdByFilter, setCreatedByFilter] = useState("");
  const [globalFilter, setGlobalFilter] = useState("");
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
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Set pageSize to 10
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-4 md:space-y-0">
        <input
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3 dark:bg-navy-800 dark:border-gray-700 dark:text-white"
          placeholder="Search projects..."
        />
        <div className="flex space-x-4 w-full md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border p-2 rounded-md w-full md:w-auto dark:bg-navy-800 dark:border-gray-700 dark:text-white"
          >
            <option value="">Filter by Status</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="On Hold">On Hold</option>
          </select>
          <select
            value={createdByFilter}
            onChange={(e) => setCreatedByFilter(e.target.value)}
            className="border p-2 rounded-md w-full md:w-auto dark:bg-navy-800 dark:border-gray-700 dark:text-white"
          >
            <option value="">Filter by Created By</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            <option value="Alice Johnson">Alice Johnson</option>
            <option value="Bob Brown">Bob Brown</option>
            <option value="Charlie White">Charlie White</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md flex items-center w-full md:w-auto">
          <AiOutlinePlus className="mr-2" />
          Add New Project
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
                    className="px-4 py-2 text-left dark:text-white cursor-pointer"
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
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-navy-700 cursor-pointer transition duration-200 ease-in-out"
                  onClick={() =>
                    console.log(`Clicked on project: ${row.original.project_name}`)
                  }
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2 whitespace-nowrap dark:text-white"
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

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="p-2 border rounded-md bg-gray-100 dark:bg-navy-800 dark:border-gray-700 dark:text-white"
        >
          Previous
        </button>
        <span className="dark:text-white">
          Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="p-2 border rounded-md bg-gray-100 dark:bg-navy-800 dark:border-gray-700 dark:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectsPage;
