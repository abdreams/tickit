import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import KanbanCard from './card';
import TaskModal from './modal';


const initialData = {
  tasks: {
    'task-1': {
    id: 'task-1',
    content: 'Update T&C copy with v1.9...',
    projectName: 'Project Alpha',
    priority: 'High',
    assigneeProfile: 'https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg',
  },
   'task-2': {
    id: 'task-2',
    content: 'Push APIs to production...',
    projectName: 'Project Beta',
    priority: 'Low',
    assigneeProfile: 'https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg',
  },
    'task-3': {
    id: 'task-3',
    content: 'Configure routing for new...',
    projectName: 'Project Gamma',
    priority: 'Medium',
    assigneeProfile: 'https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg',
  },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = data.columns[source.droppableId];
    const finishColumn = data.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setData((prevState) => ({
        ...prevState,
        columns: {
          ...prevState.columns,
          [newColumn.id]: newColumn,
        },
      }));
    } else {
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...startColumn,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finishColumn.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finishColumn,
        taskIds: finishTaskIds,
      };

      setData((prevState) => ({
        ...prevState,
        columns: {
          ...prevState.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      }));
    }
  };
  const handleCardClick = (task) => {
    console.log(task);
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  return (
    <div>
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="flex flex-col md:flex-row md:space-x-4 w-full h-full mt-4">
    {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div
                className="mb-4 md:mb-0 flex-1 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full"
                {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h3 className="text-xl font-bold mb-4 dark:text-white">
                    {column.title}
                  </h3>
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task?.id}
                      draggableId={task?.id}
                      index={index}
                    >
                      {(provided) => (
                        <div onClick={() => handleCardClick(task)}>

                          <KanbanCard task={task} provided={provided} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
    <TaskModal
    task={selectedTask}
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
  />
  </div>
  );
};

export default KanbanBoard;