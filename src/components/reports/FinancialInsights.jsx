import Card from "../common/Card";
import Badge from "../common/Badge";

const FinancialInsights = ({
  insights = [],
}) => {
  return (
    <Card
      title="Financial Insights"
      subtitle="Smart summary of your financial activity"
    >
      {insights.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No financial insights available.
        </div>
      ) : (
        <div className="space-y-4">

          {insights.map((item) => (

            <div
              key={item.id}
              className="
                flex
                items-start
                justify-between
                rounded-lg
                border
                border-gray-200
                p-4
              "
            >

              <div className="flex-1">

                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {item.description}
                </p>

              </div>

              <Badge
                variant={item.variant || "primary"}
                size="sm"
              >
                {item.status}
              </Badge>

            </div>

          ))}

        </div>
      )}
    </Card>
  );
};

export default FinancialInsights;