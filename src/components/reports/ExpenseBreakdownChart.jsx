import Card from "../common/Card";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#2563EB",
  "#16A34A",
  "#F59E0B",
  "#DC2626",
  "#9333EA",
  "#0891B2",
  "#EA580C",
];

const ExpenseBreakdownChart = ({
  data = [],
}) => {
  return (
    <Card
      title="Expense Breakdown"
      subtitle="Expenses grouped by category"
    >
      {data.length === 0 ? (
        <div className="flex h-80 items-center justify-center text-gray-500">
          No expense data available.
        </div>
      ) : (
        <div className="h-80">

          <ResponsiveContainer>

            <PieChart>

              <Pie
                data={data}
                dataKey="amount"
                nameKey="category"
                outerRadius={110}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index % COLORS.length]
                    }
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>
      )}
    </Card>
  );
};

export default ExpenseBreakdownChart;