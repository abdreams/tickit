import React, { useState, useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { AiOutlinePlus } from "react-icons/ai";
import "tailwindcss/tailwind.css";
// import projectData from "../../../data/projects.json"; // Updated import path
// import userData from "../../../data/users.json"
import teamData from "../../../data/teams.json"


const TeamManagement = () => {
  const [statusFilter, setStatusFilter] = useState("");

  const data = useMemo(
    () =>
      teamData.filter(
        (team) =>
          (statusFilter === "" || team.team_name === statusFilter) 
      ),
    [statusFilter]
  );
  console.log(statusFilter);

  const columns = useMemo(
    () => [
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Team Name
          </p>
        ),
        accessor: "team_name",
      },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Amount
          </p>
        ),
        accessor: "amount",
      },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Date
          </p>
        ),
        accessor: "date",
      },
    //   {
    //     Header: () => (
    //       <p className="text-sm font-bold text-gray-600 dark:text-white">
    //         End Date
    //       </p>
    //     ),
    //     accessor: "end_date",
    //   },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Status
          </p>
        ),
        accessor: "status",
      },
    //   {
    //     Header: () => (
    //       <p className="text-sm font-bold text-gray-600 dark:text-white">
    //         Created By
    //       </p>
    //     ),
    //     accessor: "created_by",
    //   },
      {
        Header: () => (
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Team Leader
          </p>
        ),
        accessor: "team_leader",
      },
      // {
      //   Header: () => (
      //     <p className="text-sm font-bold text-gray-600 dark:text-white">
      //       Department
      //     </p>
      //   ),
      //   accessor: "user_department",
      // }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Use 'page' instead of 'rows' for pagination
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setGlobalFilter, // Add this line
    state: { pageIndex, globalFilter },
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
      <div className="mb-4 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <input
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-full outline-none focus:border-gray-800 rounded-md border p-2 dark:border-gray-700 dark:bg-navy-800 dark:text-white md:w-1/3"
          placeholder="Search Teams..."
        />
        

           
        
        <button className="flex w-full cursor-pointer items-center rounded-md bg-blue-600 px-4 py-2 text-white md:w-auto">
          <AiOutlinePlus className="mr-2" />
          Create Team
        </button>
      </div>

      <div className="overflow-x-auto">
        {" "}
        {/* Added responsive container */}
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
                  onClick={() =>
                    console.log(
                      `Clicked on project: ${row.original.project_name}`
                    )
                  }
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="whitespace-nowrap px-4 py-2 dark:text-white"
                    >
                      {" "}
                      {/* Added 'whitespace-nowrap' */}
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

export default TeamManagement;
