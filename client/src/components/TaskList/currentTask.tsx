// src/components/tasks/CurrentTasks.tsx
const tasks = [
  { title: "Product Review for UI8 Market", status: "In progress", time: "4h", color: "bg-blue-100 text-blue-600" },
  { title: "UX Research for Product", status: "On hold", time: "8h", color: "bg-yellow-100 text-yellow-600" },
  { title: "App design and development", status: "Done", time: "32h", color: "bg-green-100 text-green-600" },
];

const CurrentTasks = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-medium mb-4 text-gray-700">Current Tasks</h2>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <div className="font-medium text-gray-800">{task.title}</div>
              <div className={`text-xs mt-1 px-2 py-1 inline-block rounded ${task.color}`}>{task.status}</div>
            </div>
            <div className="text-sm text-gray-500">{task.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentTasks;
