import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "01", thisMonth: 8, lastMonth: 7 },
  { date: "02", thisMonth: 6, lastMonth: 6 },
  { date: "03", thisMonth: 7, lastMonth: 5 },
  { date: "04", thisMonth: 4, lastMonth: 6 },
  { date: "05", thisMonth: 8, lastMonth: 7 },
  { date: "06", thisMonth: 6, lastMonth: 5 },
  { date: "07", thisMonth: 9, lastMonth: 6 },
];

export default function PerformanceChart() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-700">Performance</h2>
        <div className="text-sm text-gray-500">01–07 May</div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#1E293B", borderRadius: "8px", color: "white" }}
            labelStyle={{ color: "white" }}
          />
          <Line type="monotone" dataKey="thisMonth" stroke="#3B82F6" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="lastMonth" stroke="#F59E0B" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
