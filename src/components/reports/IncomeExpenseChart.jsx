import Card from "../common/Card";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const IncomeExpenseChart = ({
  data = [],
}) => {
  return (
    <Card
      title="Income vs Expense"
      subtitle="Monthly income and expense comparison"
    >
      {data.length === 0 ? (
        <div className="flex h-80 items-center justify-center text-gray-500">
          No data available.
        </div>
      ) : (
        <div className="h-80">

          <ResponsiveContainer>

            <BarChart data={data}>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="income"
                radius={[6, 6, 0, 0]}
              />

              <Bar
                dataKey="expense"
                radius={[6, 6, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>
      )}
    </Card>
  );
};

export default IncomeExpenseChart;