import React from 'react';
import ProjectInfo from './components/ProjectInfo';
import OverallProgress from './components/OverallProgress';
import ProjectStatistics from './components/ProjectStatistics';
import RecentActivity from './components/RecentActivity';


const ProjectDashboard = () => {
  return (
    <div className="p-8 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ProjectInfo />
        </div>
        <div>
          <OverallProgress />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2">
          <ProjectStatistics />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
