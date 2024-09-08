import React from "react";
import { Chart, ArcElement, Tooltip, Legend, CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend, CategoryScale);

const OverallProgress = () => {
  // Data for the gauge
  const data = {
    labels: ["Completed", "On Review", "On Progress"],
    datasets: [
      {
        label: "Overall Progress",
        data: [72, 18, 10], // First value is progress, second is remaining
        backgroundColor: [
          "rgba(34, 197, 94, 1)", // Green for completed
          "rgba(255, 205, 86, 1)", // Yellow for review
          "rgba(239, 68, 68, 1)", // Red for in-progress
        ],
        borderColor: ["transparent"],
        borderWidth: 1,
        cutout: "80%", // This creates the hole in the center (gauge-like)
        rotation: -90, // Start angle for the gauge
        circumference: 180, // Create the half circle effect
      },
    ],
  };

  const options = {
    rotation: -90, // start angle
    circumference: 180, // 180 degrees for half-circle
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || ''; // Use an empty string if label is undefined
            const value = tooltipItem.raw || 0; // Default to 0 if value is undefined
            return `${label}: ${value}%`;
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // No border on the segments
      },
    },
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md relative flex w-full flex-col items-center">
      <h2 className="mb-2 text-xl font-semibold">Overall Progress</h2>

      {/* Gauge chart */}
      <div className="relative h-56 w-56 -mt-12">
        <Doughnut data={data} options={options} />
        {/* Centered text inside the donut */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold mt-6">72%</span>
          <span className="text-gray-500">Completed</span>
        </div>
      </div>

      {/* Stats */}
      <div className="-mt-12 flex w-full justify-around">
        <div className="text-center">
          <span className="block text-xl font-semibold">10</span>
          <span className="text-gray-500">Total Projects</span>
        </div>
        <div className="text-center">
          <span className="block text-xl font-semibold">7</span>
          <span className="text-green-500">Completed</span>
        </div>
        <div className="text-center">
          <span className="block text-xl font-semibold">6</span>
          <span className="text-yellow-500">On Review</span>
        </div>
        <div className="text-center">
          <span className="block text-xl font-semibold">3</span>
          <span className="text-red-500">On Progress</span>
        </div>
      </div>
    </div>
  );
};

export default OverallProgress;
