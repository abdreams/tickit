import React, { useState } from 'react';
import TeamModal from './components/TeamModal';


const teamsData = [
    {
        id: 1,
        teamName: 'Development',
        teamLead: 'Alice Johnson',
        numOfProjects: 5,
        numOfEmployees: 12,
    },
    {
        id: 2,
        teamName: 'Marketing',
        teamLead: 'John Doe',
        numOfProjects: 3,
        numOfEmployees: 8,
    },
    // Add more teams as needed
];

const TeamsPage = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);

    const handleRowClick = (team) => {
        setSelectedTeam(team); // Open the modal with the clicked team data
    };

    const closeModal = () => {
        setSelectedTeam(null); // Close the modal
    };

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-2xl font-bold mb-4">Teams</h1>
            <table className="min-w-full bg-white shadow-md rounded">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="py-2 px-4">Team Name</th>
                        <th className="py-2 px-4">Team Lead</th>
                        <th className="py-2 px-4">Projects Assigned</th>
                        <th className="py-2 px-4">Number of Employees</th>
                    </tr>
                </thead>
                <tbody>
                    {teamsData.map((team) => (
                        <tr
                            key={team.id}
                            className="border-t hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleRowClick(team)}
                        >
                            <td className="py-2 px-4">{team.teamName}</td>
                            <td className="py-2 px-4">{team.teamLead}</td>
                            <td className="py-2 px-4">{team.numOfProjects}</td>
                            <td className="py-2 px-4">{team.numOfEmployees}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for editing/viewing team details */}
            {selectedTeam && <TeamModal team={selectedTeam} onClose={closeModal} />}
        </div>
    );
};

export default TeamsPage;
