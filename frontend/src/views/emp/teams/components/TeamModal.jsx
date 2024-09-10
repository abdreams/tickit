import React, { useState, useEffect } from "react";
import Select from "react-select";
import IconEdit from "./IconEdit";

const TeamModal = ({ team, isOpen, onClose }) => {
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

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleDeleteClick = () => {
    alert("Are you sure you want to delete this team?");
  };

  const handleSaveClick = () => {
    alert("Are you sure you want to make the following changes?");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="relative w-1/2 rounded-lg bg-white p-6 shadow-lg">
        {/* Close button */}
        <button
          className="hover:text-black absolute right-3 top-3 text-2xl font-bold text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        {/* Editing button */}
        <button className="hover:text-black absolute right-9 top-5 text-lg font-bold text-gray-600">
          <IconEdit />
        </button>

        <h3 className="mb-4 text-xl font-bold">{team.teamName}</h3>

        {/* Team Description (Editable) */}
        <div className="mt-4">
          <h3 className="mb-2 text-lg font-semibold">Team Description</h3>
          <textarea
            className="w-full rounded border p-2"
            placeholder="Add a description for this team"
            rows="2"
          ></textarea>
        </div>

        <div className="mt-4">
          {/* Team Lead Select */}
          <div className="w-1/2">
            <h3 className="mb-2 text-lg font-semibold">Team Lead</h3>
            <Select
              className="w-full"
              value={teamLead}
              onChange={handleLeadChange}
              options={selectedMembers} // Options are the selected team members
            />
            <p className="p-2"></p>
          </div>

          {/* Team Performance Metrics */}
          <div className="mt-4 w-1/2">
            <h3 className="mb-2 text-lg font-semibold ">Performance Metrics</h3>
            <p className="mt-2">
              Average Project Completion Time : {team.completiontime}
            </p>
            <p className="mt-2 ">Subtask Completion Rate : {team.completionRate}</p>
            <p className="p-2"></p>
          </div>
        </div>

        {/* Team Member Management */}
        <div className="mt-4 ">
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
          <button
            className="rounded mr-2 bg-red-500 px-3 py-1 text-white"
            onClick={handleDeleteClick}
          >
            Delete Team
          </button>
          <button className="rounded bg-blue-500 px-3 py-1 text-white"
            onClick={handleSaveClick}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
