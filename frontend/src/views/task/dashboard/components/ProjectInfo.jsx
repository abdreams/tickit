import React from 'react';

const ProjectInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Task Info</h2>
      <p className="text-gray-600 mb-6">
        The task is to develop a convenient, intuitive, and attractive website for an insurance company that will meet the customers' needs for information about insurance services and processes. Pages to be developed: Home page, Services page, About Us, News, Contact, Insurance Cost Calculator, Online Consultation, Personal Account, FAQ.
      </p>
      <div className="grid grid-cols-5 gap-4 text-sm font-semibold text-gray-800">
        <div>
          <p>Task type</p>
          <p className="text-black font-medium">Promo website</p>
        </div>
        <div>
          <p>Start date</p>
          <p className="text-black font-medium">Aug 1, 2023</p>
        </div>
        <div>
          <p>Deadline</p>
          <p className="text-black font-medium">Aug 30, 2023</p>
        </div>
        <div>
          <p>Task Assignees</p>
          <p className="text-black font-medium">5</p>
        </div>
        <div>
          <p>Reports</p>
          <p className="text-black font-medium">3</p>
        </div>
      </div>
      <div className="mt-6 flex items-center">
        <img
          src="https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg"
          alt="Project Leader"
          className="rounded-full h-10 w-10"
        />
        <div className="ml-4">
          <p className="text-sm text-gray-500">Task Assignor</p>
          <p className="font-semibold text-gray-900">Nader Ahmed</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
