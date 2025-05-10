import { FaCalendarAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-start py-6 px-8 border-b border-gray-200">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Hello, Margaret</h1>
        <p className="text-sm text-gray-500 mt-1">
          Track team progress here. You almost reached a goal!
        </p>
      </div>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <FaCalendarAlt className="text-gray-400" />
        <span>16 May, 2023</span>
      </div>
    </header>
  );
}
