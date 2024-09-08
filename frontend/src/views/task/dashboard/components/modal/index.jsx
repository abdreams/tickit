import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faTimes } from "@fortawesome/free-solid-svg-icons";

const TaskModal = ({ task, isOpen, onClose }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showMoreFields, setShowMoreFields] = useState(false);
  const [activeTab, setActiveTab] = useState("comments");

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
  // Close modal with Escape key
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="relative w-full flex max-w-4xl rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        {/* Close Button */}
        <button
          className="absolute right-3 top-3 text-lg text-gray-500 hover:text-red-500 focus:outline-none"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {/* Left Side */}
        <div className="w-2/3 pr-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold dark:text-white">
              {task.task_name}
            </h2>
          </div>

          {/* Attach and Link Issue Section */}
          <div className="mt-4 flex gap-x-2">
            <button className="flex items-center text-blue-500 hover:text-blue-700">
              <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
              Attach
            </button>
            <button className="text-black rounded-md bg-gray-200 px-3 py-1 dark:bg-gray-700 dark:text-white">
              Link Issue
            </button>
          </div>

          {/* Description */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold dark:text-white">
              Description
            </h3>
            <textarea
              className="mt-2 w-full rounded-md border p-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              placeholder="Add a description..."
            />
          </div>

          {/* Linked Issues */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold dark:text-white">
              Linked Issues
            </h3>
            <div className="mt-2 flex items-center space-x-2">
              <select className="rounded-md border p-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
                <option>is blocked by</option>
                <option>blocks</option>
                <option>relates to</option>
              </select>
              <input
                type="text"
                placeholder="Search for issues"
                className="flex-grow rounded-md border p-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
              <button className="rounded-md bg-blue-500 px-3 py-1 text-white">
                Link
              </button>
            </div>
            <button className="mt-2 text-blue-500">
              + Create linked issue
            </button>
          </div>

          {/* Activity (Comments) */}
          {/* Activity Section */}
          <div className="mt-6">
            <div className="flex border-b dark:border-gray-700">
              <button
                className={`px-4 py-2 ${
                  activeTab === "comments"
                    ? "border-b-2 border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
                onClick={() => setActiveTab("comments")}
              >
                Comments
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === "history"
                    ? "border-b-2 border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
                onClick={() => setActiveTab("history")}
              >
                History
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === "worklog"
                    ? "border-b-2 border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
                onClick={() => setActiveTab("worklog")}
              >
                Work log
              </button>
            </div>

            {/* Conditionally render content based on selected tab */}
            <div className="mt-4">
              {activeTab === "comments" && (
                <div>
                  <p className="dark:text-gray-300">Comments content...</p>
                  {/* Comment Input */}
                  <div className="mt-2 flex items-center">
                    <img
                      src="https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg"
                      alt="User"
                      className="mr-2 h-8 w-8 rounded-full"
                    />
                    <input
                      type="text"
                      className="flex-grow rounded-lg border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      placeholder="Add a comment..."
                    />
                    <button className="ml-2 text-blue-500 dark:text-blue-400">
                      Submit
                    </button>
                   
                  </div>
                </div>
              )}
              {activeTab === "history" && (
                <p className="dark:text-gray-300">History content...</p>
              )}
              {activeTab === "worklog" && (
                <p className="dark:text-gray-300">Work log content...</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/3 mt-4 px-2 py-2">
          {/* Details Section */}
          <div className="cursor-pointer">
            <h3
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
              onClick={() => setShowDetails(!showDetails)}
            >
              Details &nbsp;
                <span className="text-xs">

               {showDetails ? "▲" : "▼"}
                </span>
            </h3>
            {showDetails && (
              <div className="mt-2">
                <p className="text-gray-500 dark:text-gray-400">
                  Assignee:{" "}
                  <span className="text-black dark:text-white">John Doe</span>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Reporter:{" "}
                  <span className="text-black dark:text-white">Jane Smith</span>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Labels:{" "}
                  <span className="text-black dark:text-white">Bug, High</span>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Priority:{" "}
                  <span className="text-black dark:text-white">High</span>
                </p>
              </div>
            )}
          </div>

          {/* More Fields Section */}
          <div className="mt-4 cursor-pointer">
            <h3
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
              onClick={() => setShowMoreFields(!showMoreFields)}
            >
              More Fields &nbsp;
              <span className="text-xs">

              {showMoreFields ? "▲" : "▼"}
              </span>
            </h3>
            {showMoreFields && (
              <div className="mt-2">
                <p className="text-gray-500 dark:text-gray-400">
                  Original Estimate:{" "}
                  <span className="text-black dark:text-white">5h</span>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Time Tracking:{" "}
                  <span className="text-black dark:text-white">3h logged</span>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Target Start:{" "}
                  <span className="text-black dark:text-white">2024-08-15</span>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Target End:{" "}
                  <span className="text-black dark:text-white">2024-08-20</span>
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Team:{" "}
                  <span className="text-black dark:text-white">
                    Development
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
