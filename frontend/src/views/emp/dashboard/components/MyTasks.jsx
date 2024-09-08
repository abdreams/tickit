// src/dashboard/components/MyTasks.jsx

import { useState } from 'react';

const MyTasks = () => {
  const [activeTab, setActiveTab] = useState('Recently');

  // Dummy data for task cards
  const tasks = [
    { id: 1, name: 'Fitness app', description: 'Make a single landing page and dashboard.', progress: 65, team: ['John', 'Jane', 'Doe'] },
    { id: 2, name: 'Ecom app&dashboard', description: 'Make mobile app and dashboard. Behance presentation.', progress: 80, team: ['Mark', 'Lucy', 'Ella'] },
    { id: 3, name: 'Fitness app', description: 'Make a single landing page and dashboard.', progress: 65, team: ['John', 'Jane', 'Doe'] },
    { id: 4, name: 'Ecom app&dashboard', description: 'Make mobile app and dashboard. Behance presentation.', progress: 80, team: ['Mark', 'Lucy', 'Ella'] },
  ];

  const tabs = ['Recently', 'Today', 'Upcoming', 'Later'];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">My tasks</h2>
      
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm font-medium ${activeTab === tab ? 'text-blue-600' : 'text-gray-500'} focus:outline-none`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Scrollable task cards */}
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white shadow-lg border border-gray-200 rounded-lg p-4 w-72 min-w-72">
            <h3 className="font-semibold text-lg mb-2">{task.name}</h3>
            <p className="text-gray-500 mb-4">{task.description}</p>
          
            {/* Team members */}
            <div className="flex -space-x-2 mb-4">
              {task.team.map((member, index) => (
                <img
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-white"
                  src={`https://i.pravatar.cc/150?img=${index + 1}`} 
                  alt={member}
                />
              ))}
            </div>
          
            {/* Progress */}
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Progress</span>
              <span className="text-blue-600 font-semibold text-sm">{task.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${task.progress}%` }}
              />
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
