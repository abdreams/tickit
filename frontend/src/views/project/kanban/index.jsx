import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import KanbanCard from "./card";
import TaskModal from "./modal";
import Select from "react-select";

const currentUser = "John Doe"; // Assuming the current user

const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Update T&C copy with v1.9...",
      projectName: "Project Alpha",
      priority: "High",
      assigneeProfile:
        "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg",
      assignee: "John Doe",
    },
    "task-2": {
      id: "task-2",
      content: "Push APIs to production...",
      projectName: "Project Alpha",
      priority: "Low",
      assigneeProfile:
        "https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg",
      assignee: "Jane Smith",
    },
    "task-3": {
      id: "task-3",
      content: "Configure routing for new feature...",
      projectName: "Project Alpha",
      priority: "Medium",
      assigneeProfile:
        "https://i.pinimg.com/236x/a7/da/74/a7da745a7bab241d4ef4c389cd898d26.jpg",
      assignee: "Michael Johnson",
    },
    "task-4": {
      id: "task-4",
      content: "Design new dashboard layout...",
      projectName: "Project Beta",
      priority: "High",
      assigneeProfile:
        "https://cdn.pixabay.com/photo/2017/08/30/01/01/young-2695564_640.jpg",
      assignee: "Emily Davis",
    },
    "task-5": {
      id: "task-5",
      content: "Update user authentication flow...",
      projectName: "Project Beta",
      priority: "Medium",
      assigneeProfile: "https://randomuser.me/api/portraits/men/57.jpg",
      assignee: "Chris Brown",
    },
    "task-6": {
      id: "task-6",
      content: "Review new feature requirements...",
      projectName: "Project Gamma",
      priority: "Low",
      assigneeProfile: "https://randomuser.me/api/portraits/men/59.jpg",
      assignee: "Olivia White",
    },
    "task-7": {
      id: "task-7",
      content: "Fix bug in payment module...",
      projectName: "Project Gamma",
      priority: "High",
      assigneeProfile: "https://randomuser.me/api/portraits/men/1.jpg",
      assignee: "Ethan Harris",
    },
    "task-8": {
      id: "task-8",
      content: "Optimize database queries...",
      projectName: "Project Delta",
      priority: "Medium",
      assigneeProfile: "https://randomuser.me/api/portraits/men/5.jpg",
      assignee: "Sophia Martinez",
    },
    "task-9": {
      id: "task-9",
      content: "Prepare marketing materials...",
      projectName: "Project Delta",
      priority: "Low",
      assigneeProfile: "https://randomuser.me/api/portraits/men/2.jpg",
      assignee: "David Wilson",
    },
    "task-10": {
      id: "task-10",
      content: "Implement new API endpoints...",
      projectName: "Project Alpha",
      priority: "Medium",
      assigneeProfile: "https://randomuser.me/api/portraits/men/3.jpg",
      assignee: "Ava Johnson",
    },
    "task-11": {
      id: "task-11",
      content: "Conduct user testing sessions...",
      projectName: "Project Beta",
      priority: "High",
      assigneeProfile: "https://randomuser.me/api/portraits/men/4.jpg",
      assignee: "Liam Thompson",
    },
    "task-12": {
      id: "task-12",
      content: "Develop feature toggle mechanism...",
      projectName: "Project Gamma",
      priority: "Medium",
      assigneeProfile: "https://randomuser.me/api/portraits/men/8.jpg",
      assignee: "Mia Anderson",
    },
    "task-13": {
      id: "task-13",
      content: "Create user onboarding flow...",
      projectName: "Project Delta",
      priority: "Low",
      assigneeProfile: "https://randomuser.me/api/portraits/men/9.jpg",
      assignee: "Noah White",
    },
    "task-14": {
      id: "task-14",
      content: "Fix UI responsiveness issues...",
      projectName: "Project Alpha",
      priority: "Medium",
      assigneeProfile: "https://https://randomuser.me/api/portraits/men/11.jpg",
      assignee: "Emma Taylor",
    },
    "task-15": {
      id: "task-15",
      content: "Audit and improve security measures...",
      projectName: "Project Beta",
      priority: "High",
      assigneeProfile: "https://randomuser.me/api/portraits/men/14.jpg",
      assignee: "William Scott",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: [
        "task-1",
        "task-2",
        "task-3",
        "task-11",
        "task-12",
        "task-13",
        "task-14",
      ],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [
        "task-4",
        "task-5",
        "task-6",
        "task-7",
        "task-8",
        "task-9",
        "task-10",
      ],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-15"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAssignees, setSelectedAssignees] = useState([]);

  // Extract unique assignees
  const assignees = new Set();
  for (const task of Object.values(initialData.tasks)) {
    assignees.add(task.assignee);
  }

  // Create the assignees array
  const allAssignees = [
    { value: "all", label: "All Assignees" },
    { value: "me", label: "My Tasks" },
    ...Array.from(assignees).map((assignee) => ({
      value: assignee,
      label: assignee,
    })),
  ];

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAssigneeChange = (selectedOptions) => {
    setSelectedAssignees(selectedOptions || []);
  };

  const filteredTasks = Object.keys(data.tasks).reduce((result, taskId) => {
    const task = data.tasks[taskId];
    const selectedValues = selectedAssignees.map((assignee) => assignee.value);

    const isAssigneeSelected =
      selectedValues.includes("all") ||
      (selectedValues.includes("me") && task.assignee === currentUser) ||
      selectedAssignees.length === 0 ||
      selectedValues.includes(task.assignee);

    if (
      task.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
      isAssigneeSelected
    ) {
      result[taskId] = task;
    }

    return result;
  }, {});

  return (
    <div>
      {/* Search and Filter UI */}
      <div className="mb-4 flex gap-8 ">
        <input
          type="text"
          placeholder="Search ..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="rounded-lg border border-gray-600 p-2"
        />
        <Select
          isMulti
          options={allAssignees}
          value={selectedAssignees}
          onChange={handleAssigneeChange}
          placeholder="Filter by assignees..."
          className="mt-0.5 w-1/2"
        />
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="mt-4 flex h-full w-full flex-col md:flex-row md:space-x-4">
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds
              .map((taskId) => filteredTasks[taskId])
              .filter(Boolean);

            return (
              <Droppable droppableId={column.id} key={column.id}>
                {(provided) => (
                  <div
                    className="mb-4 w-full flex-1 rounded-lg bg-gray-100 p-4 dark:bg-gray-700 md:mb-0"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <h3 className="mb-4 text-xl font-bold dark:text-white">
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
