import { FaHome, FaProjectDiagram, FaTasks, FaUsers, FaCog } from "react-icons/fa";
// import { Button } from "@/components/ui/button";

const navItems = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaProjectDiagram />, label: "Projects" },
  { icon: <FaTasks />, label: "Tasks" },
  { icon: <FaUsers />, label: "Team" },
  { icon: <FaCog />, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-white shadow-md rounded-r-3xl p-5 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold text-gray-800 mb-10">logip</div>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-10">
        <div className="bg-blue-50 p-4 rounded-2xl text-center mb-4">
          <p className="text-sm text-gray-700 mb-2">Upgrade to Pro</p>
          {/* <Button className="w-full">Upgrade</Button> */}
        </div>
        <div className="text-sm text-gray-400 space-y-2">
          <p>Help & information</p>
          <p>Log out</p>
        </div>
      </div>
    </aside>
  );
}
