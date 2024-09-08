import React from 'react';

const PerformanceMetrics = () => {
  const taskCompletionRate = 100; // Example value
  const avgCompletionTime = 5.2; // Example in hours

  return (
    <div className="bg-white rounded-lg p-4 shadow-md w-full ">
      <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
      
      {/* Task Completion Rate */}
      <div className="mb-4">
        <h3 className="text-md font-medium">Task Completion Rate</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${taskCompletionRate}%` }}
          ></div>
        </div>
        <span className="text-sm">{taskCompletionRate}% on time</span>
      </div>

      {/* Average Task Completion Time */}
      <div className="mb-4">
        <h3 className="text-md font-medium">Avg Task Completion Time</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${(avgCompletionTime / 8) * 100}%` }} // Assuming 8 hours max
          ></div>
        </div>
        <span className="text-sm">{avgCompletionTime} hours</span>
      </div>

      {/* Add more simple metrics if needed */}
    </div>
  );
};

export default PerformanceMetrics;
