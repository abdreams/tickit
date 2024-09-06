import React from "react";
import { FaCircle } from "react-icons/fa";

const activities = [
  { user: "Floyd Miles", action: "Joined the project", time: "1 day ago" },
  { user: "Jenny Wilson", action: "Joined the project", time: "1 day ago" },
  {
    user: "Arlene McCoy",
    action: "Assigned a new task to",
    highlight: "You",
    time: "1 day ago",
  },
  { user: "Ronald Richards", action: "Reported an issue", time: "2 days ago" },
  {
    user: "Leslie Alexander",
    action: "Uploaded a file",
    time: "2 days ago",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-6">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start relative group">
            {/* Timeline Vertical Line */}
            {index !== activities.length - 1 && (
              <span className="absolute left-1.5 top-1 bottom-0 w-px bg-gray-300"></span>
            )}
            {/* Icon */}
            <div className="relative z-10 mr-4">
              <FaCircle
                className={`text-${
                  activity.highlight ? "blue-500" : "gray-500"
                }`}
                size={12}
              />
            </div>
            {/* Activity Content */}
            <div className="bg-gray-50 p-4 rounded-lg w-full shadow-sm hover:bg-gray-100 transition">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">{activity.user}</span>{" "}
                {activity.action}{" "}
                {activity.highlight && (
                  <span className="font-bold text-blue-600">
                    {activity.highlight}
                  </span>
                )}
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
