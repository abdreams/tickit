import React, { useState, useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import TeamModal from "./components/TeamModal";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import Select from 'react-select';

const teamsData = [
  {
    id: 1,
    teamName: "Development",
    teamLead: "Alice Johnson",
    numOfProjects: 5,
    numOfEmployees: 12,
    team_health: "good",
  },
  {
    id: 2,
    teamName: "Marketing",
    teamLead: "John Doe",
    numOfProjects: 3,
    numOfEmployees: 8,
    team_health: "warning",
  },
  {
    id: 3,
    teamName: "Design",
    teamLead: "Emily Smith",
    numOfProjects: 4,
    numOfEmployees: 7,
    team_health: "good",
  },
  {
    id: 4,
    teamName: "Sales",
    teamLead: "Michael Brown",
    numOfProjects: 6,
    numOfEmployees: 10,
    team_health: "bad",
  },
  {
    id: 5,
    teamName: "HR",
    teamLead: "Linda Davis",
    numOfProjects: 2,
    numOfEmployees: 5,
    team_health: "good",
  },
  {
    id: 6,
    teamName: "IT Support",
    teamLead: "David Wilson",
    numOfProjects: 8,
    numOfEmployees: 15,
    team_health: "warning",
  },
  {
    id: 7,
    teamName: "Finance",
    teamLead: "Karen Martinez",
    numOfProjects: 3,
    numOfEmployees: 6,
    team_health: "good",
  },
  {
    id: 8,
    teamName: "Legal",
    teamLead: "James Anderson",
    numOfProjects: 2,
    numOfEmployees: 4,
    team_health: "good",
  },
  {
    id: 9,
    teamName: "Customer Support",
    teamLead: "Sarah Lee",
    numOfProjects: 4,
    numOfEmployees: 8,
    team_health: "warning",
  },
  {
    id: 10,
    teamName: "Research",
    teamLead: "Christopher Harris",
    numOfProjects: 7,
    numOfEmployees: 11,
    team_health: "good",
  },
  {
    id: 11,
    teamName: "Product Management",
    teamLead: "Patricia Clark",
    numOfProjects: 6,
    numOfEmployees: 9,
    team_health: "bad",
  },
  {
    id: 12,
    teamName: "Operations",
    teamLead: "Matthew Lewis",
    numOfProjects: 5,
    numOfEmployees: 13,
    team_health: "good",
  },
  {
    id: 13,
    teamName: "Procurement",
    teamLead: "Barbara Walker",
    numOfProjects: 4,
    numOfEmployees: 7,
    team_health: "warning",
  },
  {
    id: 14,
    teamName: "Quality Assurance",
    teamLead: "Jessica Robinson",
    numOfProjects: 3,
    numOfEmployees: 6,
    team_health: "good",
  },
  {
    id: 15,
    teamName: "Supply Chain",
    teamLead: "Andrew Hall",
    numOfProjects: 7,
    numOfEmployees: 10,
    team_health: "bad",
  },
  {
    id: 16,
    teamName: "Public Relations",
    teamLead: "Megan Young",
    numOfProjects: 2,
    numOfEmployees: 5,
    team_health: "good",
  },
  {
    id: 17,
    teamName: "Data Science",
    teamLead: "Joshua King",
    numOfProjects: 8,
    numOfEmployees: 14,
    team_health: "good",
  },
  {
    id: 18,
    teamName: "Engineering",
    teamLead: "Daniel Wright",
    numOfProjects: 5,
    numOfEmployees: 12,
    team_health: "warning",
  },
  {
    id: 19,
    teamName: "Content Creation",
    teamLead: "Olivia Hill",
    numOfProjects: 4,
    numOfEmployees: 9,
    team_health: "good",
  },
  {
    id: 20,
    teamName: "Cybersecurity",
    teamLead: "Sophia Scott",
    numOfProjects: 6,
    numOfEmployees: 11,
    team_health: "bad",
  },
];


const getHealthColor = (status) => {
  if (status === "good") return "text-green-500";
  if (status === "warning") return "text-yellow-500";
  if (status === "bad") return "text-red-500";
  return "text-gray-500";
};

const TeamsPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const [teamLeadFilter, setTeamLeadFilter] = useState(null);

  const data = useMemo(() => teamsData, []);

  const columns = useMemo(
    () => [
      {
        Header: "Team Name",
        accessor: "teamName",
      },
      {
        Header: "Team Lead",
        accessor: "teamLead",
      },
      {
        Header: "Projects Assigned",
        accessor: "numOfProjects",
      },
      {
        Header: "Number of Employees",
        accessor: "numOfEmployees",
      },
      {
        Header: "Team Health",
        accessor: "team_health",
        Cell: ({ value }) => (
          <div className="w-1/8">
            <div className="mt-1 flex gap-x-2">
              <FaCircle className={getHealthColor(value)} />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {value === "good" && "Healthy"}
                {value === "warning" && "At Risk"}
                {value === "bad" && "Critical"}
                {!["good", "warning", "bad"].includes(value) &&
                  "Unknown"}
              </span>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // this array now contains only the rows for the current page
    previousPage,
    nextPage,
    pageOptions,
    canPreviousPage,
    canNextPage,
    prepareRow,
    setGlobalFilter: setTableGlobalFilter,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useFilters,
    usePagination
  );

  const handleRowClick = (team) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTeam(null);
    setIsModalOpen(false);
  };

  const handleGlobalFilterChange = (e) => {
    setGlobalFilter(e.target.value);
    setTableGlobalFilter(e.target.value);
  };

  const handleLeadChange = (selectedOption) => {
    setTeamLeadFilter(selectedOption ? selectedOption.value : "");
  };

  // Get unique team leads for the select options
  const teamLeads = Array.from(new Set(teamsData.map((team) => team.teamLead)))
    .map(lead => ({ value: lead, label: lead }));

  return (
    <div className="container mx-auto my-8">
      {/* Search and Filters */}
      <div className="mb-4 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <input
          value={globalFilter || ""}
          onChange={handleGlobalFilterChange}
          className="w-full rounded-md border p-2 dark:border-gray-700 dark:bg-navy-800 dark:text-white md:w-1/3"
          placeholder="Search teams..."
        />
        <Select
            value={teamLeads.find(option => option.value === teamLeadFilter) || null}
            onChange={handleLeadChange}
            options={teamLeads}
            placeholder="Filter by Team Lead"
            isClearable
          />
        <div>
          <button className="flex w-full items-center rounded-md bg-blue-600 px-4 py-2 text-white md:w-auto">
            <AiOutlinePlus className="mr-2" />
            <Link to="/emp/teams/new">Create New Team</Link>
          </button>
        </div>
      </div>

      {/* React Table */}
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
                    {...column.getHeaderProps()}
                    className="cursor-pointer px-4 py-2 text-left dark:text-white"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => { // Use the 'page' array here
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="cursor-pointer border-t hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-navy-700"
                  onClick={() => handleRowClick(row.original)}
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
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Modal for editing/viewing team details */}
      {selectedTeam && (
        <TeamModal
          team={selectedTeam}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
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

export default TeamsPage;
