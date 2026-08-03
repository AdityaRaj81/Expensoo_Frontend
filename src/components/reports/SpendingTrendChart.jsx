import Card from "../common/Card";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const SpendingTrendChart = ({ data = [] }) => {
  return (
    <Card
      title="Spending Trend"
      subtitle="Track spending over time"
    >
      {data.length === 0 ? (
        <div className="flex h-80 items-center justify-center text-gray-500">
          No spending trend available.
        </div>
      ) : (
        <div className="h-80">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={data}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="label" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="expense"
                stroke="#2563EB"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>
      )}
    </Card>
  );
};

export default SpendingTrendChart;