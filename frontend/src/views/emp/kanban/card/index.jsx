import React from 'react';

const KanbanCard = ({ task, provided }) => {
  return (
    <div
      className=" bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-2"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <h4 className="font-bold text-lg dark:text-white">{task.content}</h4>
      <div className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
        <p>Assigned to: John Doe</p>
        <p>Due Date: 2024-08-20</p>
        <p>Priority: High</p>
      </div>
    </div>
  );
};

export default KanbanCard;
