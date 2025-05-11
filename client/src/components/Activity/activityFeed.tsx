// src/components/activity/ActivityFeed.tsx
const activities = [
  {
    user: "Floyd Miles",
    action: "commented on Stark Project",
    message: "Hi! Next week we'll start a new project. I'll tell you all the details later",
    time: "10:15 AM",
  },
  {
    user: "Guy Hawkins",
    action: "added a file to 7Heros Project",
    file: "Homepage.fig (13.4Mb)",
    time: "10:15 AM",
  },
  {
    user: "Kristin Watson",
    action: "commented on 7Heros Project",
    time: "10:15 AM",
  },
];

const ActivityFeed = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm h-full">
      <h2 className="text-lg font-medium mb-4 text-gray-700">Activity</h2>
      <ul className="space-y-4 text-sm">
        {activities.map((activity, index) => (
          <li key={index}>
            <div className="font-medium text-gray-800">{activity.user}</div>
            <div className="text-gray-500">{activity.action}</div>
            {activity.message && <div className="text-gray-700 mt-1">"{activity.message}"</div>}
            {activity.file && <div className="text-blue-600 mt-1 underline cursor-pointer">{activity.file}</div>}
            <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
