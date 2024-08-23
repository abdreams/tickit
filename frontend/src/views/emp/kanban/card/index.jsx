import React from 'react';

// Icons can be replaced with actual SVGs or FontAwesome icons
const PriorityIcon = ({ priority }) => {
  switch (priority) {
    case 'Low':
      return <span className="text-blue-400">🔵</span>;
    case 'Medium':
      return <span className="text-yellow-400">🟡</span>;
    case 'High':
      return <span className="text-red-400">🔴</span>;
    case 'Urgent':
      return <span className="text-purple-600">🟣</span>;
    default:
      return null;
  }
};

const KanbanCard = ({ task, provided }) => {
  const { content, projectName, priority, assigneeProfile } = task;

  return (
    <div
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-2"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <h4 className="font-bold text-lg dark:text-white">{content}</h4>
      {/* <div className="text-gray-600 dark:text-gray-300 mt-2 text-sm flex justify-between items-center"> */}
       
        
      {/* </div> */}
      <div className="text-gray-500 dark:text-gray-400 text-sm mt-4 flex justify-between items-center">
        {/* <span>{task.id}</span> */}
        <div className="font-semibold">{projectName}</div>
        <div className="flex space-x-2">
          <PriorityIcon priority={priority} />
          <img
            src={assigneeProfile}
            alt="Assignee"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
