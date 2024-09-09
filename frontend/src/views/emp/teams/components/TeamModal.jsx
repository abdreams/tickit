import React, { useState } from "react";
import Select from "react-select";

const TeamModal = ({ team, onClose }) => {
  const initialMembers = [
    { label: "Alice Johnson", value: "Alice Johnson" },
    { label: "Bob Smith", value: "Bob Smith" },
    { label: "Charlie Davis", value: "Charlie Davis" },
  ];

  const [teamMembers, setTeamMembers] = useState(initialMembers); // Team members with labels and values for react-select
  const [selectedMembers, setSelectedMembers] = useState(initialMembers); // Pre-selected members
  const [teamLead, setTeamLead] = useState({
    label: team.teamLead,
    value: team.teamLead,
  }); // The current team lead

  const handleMemberChange = (selectedOptions) => {
    setSelectedMembers(selectedOptions); // Update selected team members
  };

  const handleLeadChange = (selectedOption) => {
    setTeamLead(selectedOption); // Update the team lead
  };

  return (
    <div className="bg-black fixed inset-0 z-auto mt-10 flex items-center justify-center overflow-auto bg-opacity-50 shadow-2xl">
      <div className="relative w-1/2 rounded-lg bg-white p-6 shadow-lg">
        {/* Close button */}
        <button
          className="hover:text-black absolute right-3 top-3 text-2xl font-bold text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="mb-4 text-xl font-bold">
          Team Details: {team.teamName}
        </h2>

        {/* Team Description (Editable) */}
        <div className="mt-4">
          <h3 className="mb-2 text-lg font-semibold">Team Description</h3>
          <textarea
            className="w-full rounded border p-2"
            placeholder="Add a description for this team"
            rows="2"
          ></textarea>
        </div>

        <div className="flex items-center gap-x-20">
          {/* Team Lead Select */}
          <div className="w-1/2">
            <h3 className="mb-2 text-lg font-semibold">Team Lead</h3>
            <Select
              value={teamLead}
              onChange={handleLeadChange}
              options={selectedMembers} // Options are the selected team members
            />
          </div>

          {/* Team Performance Metrics */}
          <div className="w-1/2">
            <h3 className="text-base font-semibold">Performance Metrics</h3>
            <p>Average Project Completion Time: 15 days</p>
            <p>Subtask Completion Rate: 80%</p>
          </div>
        </div>

        {/* Team Member Management */}
        <div className="mt-4">
          <h3 className="mb-2 text-lg font-semibold">Team Members</h3>
          <Select
            isMulti
            value={selectedMembers}
            onChange={handleMemberChange}
            options={teamMembers} // Available members
            className="mb-2"
          />
        </div>

        {/* Save and Close buttons */}
        <div className="mt-4 flex justify-end">
          <button
            className="text-black mr-2 rounded bg-gray-300 px-3 py-1"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="rounded bg-blue-500 px-3 py-1 text-white">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
