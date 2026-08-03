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

const TransactionCard = ({
  transaction,
  onEdit,
  onDelete,
}) => {
  const isIncome =
    transaction.type === "INCOME";

  return (
    <Card hover className="mb-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-gray-900">
            {transaction.category}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {formatDate(transaction.date)}
          </p>
        </div>

        <Badge
          variant={
            isIncome ? "success" : "danger"
          }
          size="sm"
        >
          {transaction.type}
        </Badge>
      </div>

      <div className="mt-4">
        <span
          className={`text-xl font-bold ${isIncome
              ? "text-green-600"
              : "text-red-600"
            }`}
        >
          {isIncome ? "+" : "-"}
          {formatCurrency(transaction.amount)}
        </span>
      </div>

      {transaction.notes && (
        <p className="mt-3 break-words text-sm text-gray-600">
          {transaction.notes}
        </p>
      )}

      <div className="mt-5 flex gap-3">
        <Button
          variant="outline"
          size="sm"
          fullWidth
          leftIcon={<Pencil size={16} />}
          onClick={() =>
            onEdit(transaction)
          }
        >
          Edit
        </Button>

        <Button
          variant="danger"
          size="sm"
          fullWidth
          leftIcon={<Trash2 size={16} />}
          onClick={() =>
            onDelete(transaction)
          }
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default TransactionCard;