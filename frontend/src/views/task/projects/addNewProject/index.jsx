import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddProjectPage = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    department: null,
    team: null,
    startDate: new Date(),
    endDate: new Date(),
    criticality: "Low",
  });

  const departmentOptions = [
    { value: "IT", label: "IT" },
    { value: "HR", label: "HR" },
    { value: "Marketing", label: "Marketing" },
    { value: "Finance", label: "Finance" },
  ];

  const teamOptions = [
    { value: "Team A", label: "Team A" },
    { value: "Team B", label: "Team B" },
    { value: "Team C", label: "Team C" },
    { value: "Team D", label: "Team D" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    setFormData({ ...formData, [actionMeta.name]: selectedOption });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Dummy fetch request
    fetch("https://example.com/api/projects", {
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
        <h2 className="mb-6 text-center text-2xl font-bold ">
          Add New Project
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="projectName" className="text-m block font-medium ">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="projectDescription"
              className="text-m block font-medium "
            >
              Project Description
            </label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows="3"
              required
            />
          </div>

          <div>
            <label htmlFor="department" className="text-m block font-medium ">
              Department
            </label>
            <Select
              name="department"
              value={formData.department}
              onChange={handleSelectChange}
              options={departmentOptions}
              className="mt-1"
              classNamePrefix="react-select"
              isSearchable
              required
            />
          </div>

          <div>
            <label htmlFor="team" className="text-m block font-medium ">
              Team Assigned
            </label>
            <Select
              name="team"
              value={formData.team}
              onChange={handleSelectChange}
              options={teamOptions}
              className="mt-1"
              classNamePrefix="react-select"
              isSearchable
              required
            />
          </div>

          <div className="flex items-center gap-20 ">
            <div>
              <label htmlFor="startDate" className="text-m block font-medium ">
                Project Starting Date & Time
              </label>
              <DatePicker
                selected={formData.startDate}
                onChange={(date) =>
                  setFormData({ ...formData, startDate: date })
                }
                showTimeSelect
                dateFormat="Pp"
                className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="endDate" className="text-m block font-medium ">
                Project Ending Date & Time
              </label>
              <DatePicker
                selected={formData.endDate}
                onChange={(date) => setFormData({ ...formData, endDate: date })}
                showTimeSelect
                dateFormat="Pp"
                className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="criticality"
                className="text-m block font-medium "
              >
                Criticality
              </label>
              <select
                name="criticality"
                value={formData.criticality}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
          </div>

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

export default AddProjectPage;
