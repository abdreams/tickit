

import MyTasks from './components/MyTasks';
import OverallProgress from './components/OverallProgress';
import PerformanceMetrics from './components/PerformanceMetrics';
import Announcements from './components/Announcements';

const EmployeeDashboard = () => {
  return (
    <div className="flex w-full h-full mt-8">
      {/* Left section (3/4 width) */}
      <div className="w-3/4 pr-4">
        {/* My Tasks Section */}
        <div className="mb-4">
          <MyTasks />
        </div>
        {/* Overall Progress and Performance Metrics */}
        <div className="flex">
          <div className="w-1/2 pr-2">
            <OverallProgress />
          </div>
          <div className="w-1/2 pl-2">
            <PerformanceMetrics />
          </div>
        </div>
      </div>
      
      {/* Right section (1/4 width) */}
      <div className="w-1/4 pl-4">
        <Announcements />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
