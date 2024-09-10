import React, { useState } from "react";
import Select from "react-select";

const AddNewTeam = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    teamDescription: "",
    teamMembers: [],
    teamLeader: null,
  });

  const teamMembersOptions = [
    { value: "member1", label: "John Doe" },
    { value: "member2", label: "Jane Smith" },
    { value: "member3", label: "Bob Johnson" },
    { value: "member4", label: "Alice Davis" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    setFormData({ ...formData, [actionMeta.name]: selectedOption });
  };

  const handleMultiSelectChange = (selectedOptions, actionMeta) => {
    setFormData({ ...formData, [actionMeta.name]: selectedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Dummy fetch request
    fetch("https://example.com/api/teams", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-[900px] rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">Add New Team</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="teamName" className="text-m block font-medium">
              Team Name
            </label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="teamDescription"
              className="text-m block font-medium"
            >
              Team Description
            </label>
            <textarea
              name="teamDescription"
              value={formData.teamDescription}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows="3"
              required
            />
          </div>

          <div>
            <label htmlFor="teamMembers" className="text-m block font-medium">
              Select Team Members
            </label>
            <Select
              name="teamMembers"
              value={formData.teamMembers}
              onChange={handleMultiSelectChange}
              options={teamMembersOptions}
              className="mt-1"
              classNamePrefix="react-select"
              isMulti
              isSearchable
              required
            />
          </div>

          {formData.teamMembers.length > 0 && (
            <div>
              <label htmlFor="teamLeader" className="text-m block font-medium">
                Assign Team Leader
              </label>
              <Select
                name="teamLeader"
                value={formData.teamLeader}
                onChange={handleSelectChange}
                options={formData.teamMembers}
                className="mt-1"
                classNamePrefix="react-select"
                isSearchable
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewTeam;
