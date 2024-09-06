import React, { useState } from 'react';

const TimeTracking = ({ loggedHours, overEstimateHours, remainingHours }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const totalHours = loggedHours + overEstimateHours + remainingHours;
  const loggedPercentage = (loggedHours / totalHours) * 100;
  const overEstimatePercentage = (overEstimateHours / totalHours) * 100;
  const remainingPercentage = (remainingHours / totalHours) * 100;

  // Tooltip mouse movement handler
  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <div className="w-full flex flex-col items-center">
       
      <div className="w-[200px] h-[30px] flex relative bg-gray-200 rounded overflow-hidden">
        {/* Logged Time Bar */}
        <div
          style={{ width: `${loggedPercentage}%` }}
          className="bg-blue-500"
          title={`${loggedHours}h consumed`}
        ></div>

        {/* Over Estimate Bar */}
        {overEstimateHours > 0 && (
          <div
            style={{ width: `${overEstimatePercentage}%` }}
            className="bg-yellow-500"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onMouseMove={handleMouseMove}
          ></div>
        )}

        {/* Remaining Time Bar */}
        <div
          style={{ width: `${remainingPercentage}%` }}
          className="bg-gray-400"
          title={`${remainingHours}h remaining`}
        ></div>
      </div>

      {/* Display time labels below */}
      <div className="flex justify-between w-full text-sm mt-2 text-gray-700">
        <span>{loggedHours}h consumed</span>
        <span>{remainingHours}h remaining</span>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="absolute inline-block bg-navy-900 text-white text-xs rounded px-2 py-1"
          style={{
            top: tooltipPosition.y + 10,
            left: tooltipPosition.x + 10,
            transform: 'translate(-50%, -100%)',
            zIndex: 10,
          }}
        >
          {overEstimateHours}h over original estimate
        </div>
      )}
    </div>
  );
};

export default TimeTracking;
