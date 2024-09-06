import React from "react";
import 'chart.js/auto';
import { Doughnut} from "react-chartjs-2";


const projects = [
  {
    name: "UX research",
    progress: 100,
    deadline: "Aug 22, 2023",
    users: ["https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg", "https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg"],
  },
  {
    name: "Design",
    progress: 80,
    deadline: "Aug 22, 2023",
    users: ["https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg", "https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg"],
  },
  {
    name: "Design System",
    progress: 80,
    deadline: "Aug 22, 2023",
    users: ["https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg", "https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg"],
  },
  {
    name: "Development",
    progress: 28,
    deadline: "Aug 22, 2023",
    users: ["https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg", "https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg"],
  },
];

const ProjectStatistics = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Project Statistics</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-4 border-b pb-4"
        >
          <div className="flex items-center space-x-4">
             {/* Doughnut Chart for Progress */}
             <div className="relative w-16 h-16">
              <Doughnut
                data={{
                  labels: ["Completed", "Remaining"],
                  datasets: [
                    {
                      data: [project.progress, 100 - project.progress],
                      backgroundColor: [
                        project.progress < 40 ? "#FF6347" : "#32CD32",
                        "#e0e0e0"
                      ],
                      hoverBackgroundColor: [
                        project.progress < 40 ? "#FF4500" : "#45a049",
                        "#d0d0d0"
                      ],
                      borderWidth: 0,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  cutout: "80%",
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      enabled: false,
                    },
                  },
                }}
              />
              {/* Percentage in the middle */}
              <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-black">
                {project.progress}%
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.progress}% completed</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-400">Deadline</span>
            <span className="text-sm text-gray-500">{project.deadline}</span>
            <div className="flex -space-x-2 mt-2">
              {project.users.map((user, userIndex) => (
                <img
                  key={userIndex}
                  src={user}
                  alt="User Avatar"
                  className="w-6 h-6 rounded-full border-2 border-white shadow"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStatistics;
