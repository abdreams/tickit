import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddNewTask = () => {
  const [formData, setFormData] = useState({
    taskName: "",
    taskDescription: "",
    project: null,
    assignedBy: { value: "Self", label: "Self" },
    assignedEmployees: [],
    startDate: new Date(),
    endDate: new Date(),
    estimatedTime: { hours: 0, days: 0 },
    criticality: "Low",
    attachments: null,
    comments: "",
  });

  // Options for Select fields
  const projectOptions = [
    { value: "Project A", label: "Project A" },
    { value: "Project B", label: "Project B" },
  ];

  const employeeOptions = [
    { value: "Employee 1", label: "Employee 1" },
    { value: "Employee 2", label: "Employee 2" },
    { value: "Employee 3", label: "Employee 3" },
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle select change
  const handleSelectChange = (selectedOption, actionMeta) => {
    setFormData({ ...formData, [actionMeta.name]: selectedOption });
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFormData({ ...formData, attachments: e.target.files[0] });
  };

  // Handle estimated time change
  const handleEstimatedTimeChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      estimatedTime: { ...formData.estimatedTime, [name]: value },
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Dummy fetch request
    fetch("https://example.com/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex min-h-screen items-center justify-center mt-10">
      <div className="w-full max-w-[900px] rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">Add New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Task Name */}
          <div>
            <label htmlFor="taskName" className="text-m block font-medium">
              Task Name
            </label>
            <input
              type="text"
              name="taskName"
              value={formData.taskName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Task Description */}
          <div>
            <label htmlFor="taskDescription" className="text-m block font-medium">
              Task Description
            </label>
            <textarea
              name="taskDescription"
              value={formData.taskDescription}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows="3"
              required
            />
          </div>

          {/* Project Associated */}
          <div>
            <label htmlFor="project" className="text-m block font-medium">
              Project Associated
            </label>
            <Select
              name="project"
              value={formData.project}
              onChange={handleSelectChange}
              options={projectOptions}
              className="mt-1"
              classNamePrefix="react-select"
              isSearchable
              required
            />
          </div>

          {/* Assigned by (Default: Self) */}
          <div>
            <label htmlFor="assignedBy" className="text-m block font-medium">
              Assigned By
            </label>
            <Select
              name="assignedBy"
              value={formData.assignedBy}
              onChange={handleSelectChange}
              options={[{ value: "Self", label: "Self" }, ...employeeOptions]}
              className="mt-1"
              classNamePrefix="react-select"
              isSearchable
              required
            />
          </div>

          {/* Assigned Employees (Multi-select) */}
          <div>
            <label htmlFor="assignedEmployees" className="text-m block font-medium">
              Assigned Employees
            </label>
            <Select
              name="assignedEmployees"
              value={formData.assignedEmployees}
              onChange={handleSelectChange}
              options={employeeOptions}
              className="mt-1"
              classNamePrefix="react-select"
              isMulti
              isSearchable
            />
          </div>

          {/* Estimated Time To Complete */}
          <div className="flex gap-4">
            <div>
              <label htmlFor="hours" className="text-m block font-medium">
                Estimated Time (Hours)
              </label>
              <input
                type="number"
                name="hours"
                value={formData.estimatedTime.hours}
                onChange={handleEstimatedTimeChange}
                className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="days" className="text-m block font-medium">
                Estimated Time (Days)
              </label>
              <input
                type="number"
                name="days"
                value={formData.estimatedTime.days}
                onChange={handleEstimatedTimeChange}
                className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
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

          {/* Attachments */}
          <div>
            <label htmlFor="attachments" className="text-m block font-medium">
              Attachments
            </label>
            <input
              type="file"
              name="attachments"
              onChange={handleFileChange}
              className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Comments/Notes */}
          <div>
            <label htmlFor="comments" className="text-m block font-medium">
              Comments/Notes
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-600 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows="3"
            />
          </div>

          {/* Submit Button */}
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

export default AddNewTask;
