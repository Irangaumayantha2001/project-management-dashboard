import Sidebar from "../components/Slidebar/sliderbar";
import Header from "../components/Header/header";
import PerformanceChart from "../components/PerformanceChart/chart";
import TaskList from "../components/TaskList/currentTask";
import ActivityFeed from "../components/Activity/activityFeed";
import UserProfile from "../components/User/userCard";

export default function DashboardLayout() {
  return (
     <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-50">
        <Header />
          <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
  <div className="col-span-2 space-y-6">
    <PerformanceChart />
    <TaskList />
  </div>
  <div className="space-y-6">
    <UserProfile />
    <ActivityFeed />
  </div>
</main>
      </div>
    </div>

  );
}
