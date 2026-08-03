import Card from "../common/Card";
import Badge from "../common/Badge";
import Button from "../common/Button";

import {
  Pencil,
  Trash2,
} from "lucide-react";

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number(amount) || 0);

const formatDate = (date) => {
  if (!date) {
    return "-";
  }

  const [year, month, day] = date.split("-");

  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const TransactionTable = ({
  transactions = [],
  onEdit,
  onDelete,
}) => {
  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">
                Date
              </th>

              <th className="px-6 py-4 text-left">
                Category
              </th>

              <th className="px-6 py-4 text-center">
                Type
              </th>

              <th className="px-6 py-4 text-right">
                Amount
              </th>

              <th className="px-6 py-4 text-left">
                Notes
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => {
              const isIncome =
                transaction.type === "INCOME";

              return (
                <tr
                  key={transaction.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    {formatDate(transaction.date)}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {transaction.category}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <Badge
                      variant={
                        isIncome
                          ? "success"
                          : "danger"
                      }
                      size="sm"
                    >
                      {transaction.type}
                    </Badge>
                  </td>

                  <td
                    className={`whitespace-nowrap px-6 py-4 text-right font-semibold ${isIncome
                        ? "text-green-600"
                        : "text-red-600"
                      }`}
                  >
                    {isIncome ? "+" : "-"}
                    {formatCurrency(
                      transaction.amount
                    )}
                  </td>

                  <td className="max-w-xs px-6 py-4 text-sm text-gray-600">
                    <div className="break-words">
                      {transaction.notes || "-"}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={
                          <Pencil size={15} />
                        }
                        onClick={() =>
                          onEdit(transaction)
                        }
                      >
                        Edit
                      </Button>

                      <Button
                        variant="danger"
                        size="sm"
                        leftIcon={
                          <Trash2 size={15} />
                        }
                        onClick={() =>
                          onDelete(transaction)
                        }
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default TransactionTable;