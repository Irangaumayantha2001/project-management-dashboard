import Sidebar from "../components/Slidebar/sliderbar";
import Header from "../components/Header/header";
import PerformanceChart from "../components/PerformanceChart/chart";
import TaskList from "../components/TaskList/currentTask";
import ActivityFeed from "../components/Activity/activityFeed";
import UserProfile from "../components/User/userCard";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PerformanceChart />
              <TaskList />
            </div>
          </div>
          <div className="w-full max-w-sm border-l border-gray-200 p-6 overflow-y-auto">
            <UserProfile />
            <ActivityFeed />
          </div>
        </div>
      </main>
    </div>
  );
}
