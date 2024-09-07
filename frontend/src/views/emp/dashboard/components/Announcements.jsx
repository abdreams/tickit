import React from 'react';
import { FaCircle } from 'react-icons/fa';

// Dummy announcement data
const announcementsData = [
  {
    title: 'New Office Opening',
    description:
      'We are excited to announce the opening of our new office in San Francisco. This will serve as the main headquarters.',
    postedBy: 'Admin',
    timePosted: '3 days ago',
  },
  {
    title: 'Q3 Earnings Release',
    description:
      'The financial results for Q3 have been released, showing a strong performance across all departments.',
    postedBy: 'Finance Team',
    timePosted: '1 week ago',
  },
  {
    title: 'Holiday Schedule',
    description:
      'Please check the updated holiday schedule for the upcoming year. The office will be closed on public holidays.',
    postedBy: 'HR Department',
    timePosted: '2 weeks ago',
  },
  {
    title: 'New Benefits Plan',
    description:
      'Our company is introducing a new health and wellness benefits plan. Details will be shared in the upcoming town hall meeting.',
    postedBy: 'HR Department',
    timePosted: '1 month ago',
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Announcements</h2>
      <ul className="space-y-6">
        {announcementsData.map((announcement, index) => (
          <li key={index} className="flex items-start relative group">
            {/* Timeline Vertical Line */}
            {index !== announcementsData.length - 1 && (
              <span className="absolute left-1.5 top-1 bottom-0 w-px bg-gray-300"></span>
            )}
            {/* Icon */}
            <div className="relative z-10 mr-4">
              <FaCircle className="text-blue-500" size={12} />
            </div>
            {/* Announcement Content */}
            <div className="bg-gray-50 p-4 rounded-lg w-full shadow-sm hover:bg-gray-100 transition">
              <h4 className="font-semibold text-gray-800">{announcement.title}</h4>
              <p className="text-sm text-gray-700 mt-1">{announcement.description}</p>
              <p className="text-xs text-gray-500 mt-2">
                Posted by: {announcement.postedBy} • {announcement.timePosted}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
