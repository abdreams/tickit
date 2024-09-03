import React from 'react';

const OverallProgress = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Overall Process */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Overall Progress</h2>
        <div className="flex items-center justify-between">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-lime-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <span className="ml-2 text-gray-700 font-semibold">70%</span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Time Remaining */}
        <div className="flex flex-col items-start bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-sm ">Time remaining</span>
            <i className="fas fa-hourglass-half text-gray-400"></i>
          </div>
          <span className="text-lg font-bold text-red-500">4d</span>
        </div>

        {/* Created Task */}
        <div className="flex flex-col items-start bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-sm ">Created task</span>
            <i className="fas fa-check-circle text-gray-400"></i>
          </div>
          <span className="text-lg font-bold text-gray-900">28</span>
        </div>

        {/* Task in Progress */}
        <div className="flex flex-col items-start bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-sm ">Task in progress</span>
            <i className="fas fa-play-circle text-gray-400"></i>
          </div>
          <span className="text-lg font-bold text-gray-900">10</span>
        </div>

        {/* Upcoming Tasks */}
        <div className="flex flex-col items-start bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-between w-full mb-2">
            <span className="text-sm ">Upcoming tasks</span>
            <i className="fas fa-calendar-alt text-gray-400"></i>
          </div>
          <span className="text-lg font-bold text-gray-900">7</span>
        </div>
      </div>
    </div>
  );
};

export default OverallProgress;
