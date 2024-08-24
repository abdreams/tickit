import React, { useState, useEffect, useCallback } from "react";
import { Scheduler } from "@bitnoi.se/react-scheduler";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import "@bitnoi.se/react-scheduler/dist/style.css"; // Importing the required styles

dayjs.extend(isBetween); // Extend dayjs with isBetween plugin

const mockedSchedulerData = [
    {
      id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
      label: {
        icon: "https://picsum.photos/24?random=1",
        title: "Joe Doe",
        subtitle: "Frontend Developer",
      },
      data: [
        {
          id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
          startDate: new Date("2024-01-13T15:31:24.272Z"),
          endDate: new Date("2024-03-28T10:28:22.649Z"),
          occupancy: 3600,
          title: "Project Alpha",
          subtitle: "New Subtitle A",
          description: "Array indexing Salad West Account",
          bgColor: "rgb(53, 59, 72)", // Dark blue-gray
        },
        {
          id: "22fbe237-6344-4c8e-affb-64a1750f33bd",
          startDate: new Date("2024-05-07T08:16:31.123Z"),
          endDate: new Date("2024-07-15T21:55:23.582Z"),
          occupancy: 2852,
          title: "Project Beta",
          subtitle: "New Subtitle B",
          description: "Tuna Home Pascal IP drive",
          bgColor: "rgb(38, 50, 56)", // Dark teal
        },
        {
          id: "3601c1cd-f4b5-46bc-8564-8c983919e3f5",
          startDate: new Date("2024-02-15T22:25:14.377Z"),
          endDate: new Date("2024-06-01T07:20:50.526Z"),
          occupancy: 1800,
          title: "Project Gamma",
          subtitle: "New Subtitle C",
          bgColor: "rgb(45, 52, 54)", // Dark charcoal
        },
        {
          id: "b088e4ac-9911-426f-aef3-843d75e714c2",
          startDate: new Date("2024-08-28T10:08:22.986Z"),
          endDate: new Date("2024-09-30T12:30:30.150Z"),
          occupancy: 11111,
          title: "Project Delta",
          subtitle: "New Subtitle D",
          description: "Garden heavy an software Metal",
          bgColor: "rgb(33, 33, 33)", // Very dark gray
        },
        {
          id: "c1d2e8b0-497e-4c3a-85d6-dbd9e6f9c00f",
          startDate: new Date("2024-09-01T09:00:00.000Z"),
          endDate: new Date("2024-11-01T17:00:00.000Z"),
          occupancy: 7500,
          title: "Project Epsilon",
          subtitle: "New Subtitle E",
          description: "Dynamic Scaling Strategy",
          bgColor: "rgb(26, 35, 47)", // Dark slate
        },
      ],
    },
    {
      id: "1e6d4e85-44f4-4f2d-ae08-92b8b5c1e7b0",
      label: {
        icon: "https://picsum.photos/24?random=2",
        title: "Jane Smith",
        subtitle: "Backend Developer",
      },
      data: [
        {
          id: "d4c8bcb1-0d95-4b91-b8d4-18a7e8918f64",
          startDate: new Date("2024-03-01T10:00:00.000Z"),
          endDate: new Date("2024-06-30T16:00:00.000Z"),
          occupancy: 5000,
          title: "Project Lambda",
          subtitle: "New Subtitle F",
          description: "Server optimization and API development",
          bgColor: "rgb(48, 63, 159)", // Dark indigo
        },
        {
          id: "a9d6b6d1-9c77-4a48-b8b3-9a0b8c6b7d6f",
          startDate: new Date("2024-07-01T09:00:00.000Z"),
          endDate: new Date("2024-10-01T18:00:00.000Z"),
          occupancy: 6200,
          title: "Project Mu",
          subtitle: "New Subtitle G",
          description: "Database migration and security enhancements",
          bgColor: "rgb(66, 66, 66)", // Dark gray
        },
        {
          id: "7b2d0e5d-6f6b-4ec1-9f87-e21a8359a97f",
          startDate: new Date("2024-09-15T12:00:00.000Z"),
          endDate: new Date("2024-12-20T14:00:00.000Z"),
          occupancy: 4500,
          title: "Project Nu",
          subtitle: "New Subtitle H",
          description: "Microservices architecture redesign",
          bgColor: "rgb(0, 77, 64)", // Dark green
        },
      ],
    },
    {
      id: "2e5f4e4c-3a7f-45ef-9d78-30e6c2b4c1a0",
      label: {
        icon: "https://picsum.photos/24?random=3",
        title: "Alice Johnson",
        subtitle: "UX Designer",
      },
      data: [
        {
          id: "d98b4e6d-0b4d-4cc1-bb78-4cb2d63c674a",
          startDate: new Date("2024-01-20T08:00:00.000Z"),
          endDate: new Date("2024-04-15T17:00:00.000Z"),
          occupancy: 4800,
          title: "Project Xi",
          subtitle: "New Subtitle I",
          description: "User interface improvements and testing",
          bgColor: "rgb(55, 48, 62)", // Dark mauve
        },
        {
          id: "8e7f3d0a-6e2e-4f36-9c29-9d77e2b6b8a5",
          startDate: new Date("2024-05-01T09:00:00.000Z"),
          endDate: new Date("2024-08-15T18:00:00.000Z"),
          occupancy: 5500,
          title: "Project Omicron",
          subtitle: "New Subtitle J",
          description: "User journey mapping and analysis",
          bgColor: "rgb(40, 40, 40)", // Dark graphite
        },
        {
          id: "9d6b9c74-4f9f-46c8-a7b8-4b63c2ef6f70",
          startDate: new Date("2024-08-20T11:00:00.000Z"),
          endDate: new Date("2024-11-30T15:00:00.000Z"),
          occupancy: 6000,
          title: "Project Pi",
          subtitle: "New Subtitle K",
          description: "Prototype development and user feedback",
          bgColor: "rgb(16, 32, 64)", // Dark navy
        },
      ],
    },
    {
      id: "3f7d5c2e-6b44-4a73-bb3e-1e26e8a5b2d8",
      label: {
        icon: "https://picsum.photos/24?random=4",
        title: "Michael Brown",
        subtitle: "Data Scientist",
      },
      data: [
        {
          id: "b2a9c77f-1c44-4d60-a4c5-67e1d5c9e56b",
          startDate: new Date("2024-02-10T09:00:00.000Z"),
          endDate: new Date("2024-05-30T16:00:00.000Z"),
          occupancy: 7000,
          title: "Project Rho",
          subtitle: "New Subtitle L",
          description: "Data analysis and predictive modeling",
          bgColor: "rgb(21, 32, 43)", // Dark blue-gray
        },
        {
          id: "3b7a4d23-2e9d-4d8a-b1b8-5c5a7d6c9d62",
          startDate: new Date("2024-06-01T08:30:00.000Z"),
          endDate: new Date("2024-09-15T17:30:00.000Z"),
          occupancy: 6200,
          title: "Project Sigma",
          subtitle: "New Subtitle M",
          description: "Big data integration and analytics",
          bgColor: "rgb(19, 24, 31)", // Dark charcoal
        },
        {
          id: "1e8a8d74-4f7b-4f5a-bf5f-7d3a2b0a5d32",
          startDate: new Date("2024-09-20T10:00:00.000Z"),
          endDate: new Date("2024-12-15T16:00:00.000Z"),
          occupancy: 7500,
          title: "Project Tau",
          subtitle: "New Subtitle N",
          description: "Machine learning model training",
          bgColor: "rgb(35, 39, 42)", // Dark slate gray
        },
      ],
    },
  ];
  
  
const ProjectCalendar = () => {
  const [filterButtonState, setFilterButtonState] = useState(0);
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Simulating data fetch, could add actual data fetching logic here
    setIsLoading(false);
  }, []);

  const handleRangeChange = useCallback((range) => {
    setRange(range);
  }, []);

  const filteredMockedSchedulerData = mockedSchedulerData.map((person) => ({
    ...person,
    data: person.data.filter(
      (project) =>
        dayjs(project.startDate).isBetween(
          range.startDate,
          range.endDate,
          null,
          "[]"
        ) ||
        dayjs(project.endDate).isBetween(
          range.startDate,
          range.endDate,
          null,
          "[]"
        ) ||
        (dayjs(project.startDate).isBefore(range.startDate, "day") &&
          dayjs(project.endDate).isAfter(range.endDate, "day"))
    ),
  }));

  return (
    <div className="flex h-full w-full flex-col p-4">
     <div className="relative h-[70vh] w-[80vw]">

        <Scheduler
          data={filteredMockedSchedulerData}
          isLoading={isLoading}
          onRangeChange={handleRangeChange}
          onTileClick={(clickedResource) => console.log(clickedResource)}
          onItemClick={(item) => console.log(item)}
          onFilterData={() => {
            // Filtering logic can go here
            setFilterButtonState(1);
          }}
          onClearFilterData={() => {
            // Clearing filter logic can go here
            setFilterButtonState(0);
          }}
          config={{
            zoom: 0, // 0 - Week view, 1 - Day view, 2 - Month view
            filterButtonState,
          }}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default ProjectCalendar;
