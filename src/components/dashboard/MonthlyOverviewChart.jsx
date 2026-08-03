import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import Card from "../common/Card";

const MonthlyOverviewChart = ({
  income = 0,
  expense = 0,
}) => {
  const data = [
    {
      name: "Current Month",
      Income: income,
      Expense: expense,
    },
  ];

  return (
    <Card className="mb-6 p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Monthly Overview
        </h2>

        <p className="text-sm text-gray-500">
          Income vs Expense for the current month
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip
              formatter={(value) =>
                new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(value)
              }
            />

            <Bar
              dataKey="Income"
              radius={[8, 8, 0, 0]}
            />

            <Bar
              dataKey="Expense"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default MonthlyOverviewChart;