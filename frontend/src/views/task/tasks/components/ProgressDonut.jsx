// ProgressDonut.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components needed for the chart
ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressDonut = ({ progress }) => {
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: [progress < 40 ? '#FF6347' : '#32CD32', '#e0e0e0'],
        hoverBackgroundColor: [progress < 40 ? '#FF4500' : '#45a049', '#d0d0d0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative w-16 h-16">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-black">
        {progress}%
      </div>
    </div>
  );
};

export default ProgressDonut;
