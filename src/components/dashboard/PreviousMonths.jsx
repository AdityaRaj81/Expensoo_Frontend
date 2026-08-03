import Card from "../common/Card";

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

const PreviousMonths = ({
  months = [],
}) => {
  return (
    <Card className="p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Previous Months Summary
        </h2>

        <p className="text-sm text-gray-500">
          Overview of the last three months
        </p>
      </div>

      <div className="space-y-4">
        {months.length === 0 ? (
          <p className="text-center text-gray-500">
            No previous month data available.
          </p>
        ) : (
          months.map((month) => {
            const saved =
              month.income - month.expense;

            const positive = saved >= 0;

            return (
              <div
                key={month.month}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  p-4
                  hover:bg-gray-50
                "
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {month.month}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Income: {formatCurrency(month.income)}
                  </p>

                  <p className="text-sm text-gray-500">
                    Expense: {formatCurrency(month.expense)}
                  </p>
                </div>

                <div
                  className={`text-right ${positive
                    ? "text-green-600"
                    : "text-red-600"
                    }`}
                >
                  <p className="text-sm font-medium">
                    {positive
                      ? "Saved"
                      : "Overspent"}
                  </p>

                  <p className="text-lg font-bold">
                    {formatCurrency(Math.abs(saved))}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </Card>
  );
};

export default PreviousMonths;