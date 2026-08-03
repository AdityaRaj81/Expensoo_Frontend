import Card from "../common/Card";
import { IndianRupee, TrendingUp, TrendingDown } from "lucide-react";

const SummaryCards = ({
  currentBalance = 0,
  totalIncome = 0,
  totalExpense = 0,
}) => {
  const cards = [
    {
      title: "Current Balance",
      value: currentBalance,
      icon: IndianRupee,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Total Income",
      value: totalIncome,
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Total Expense",
      value: totalExpense,
      icon: TrendingDown,
      color: "text-red-600",
      bg: "bg-red-100",
    },
  ];

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card key={card.title} className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  {formatCurrency(card.value)}
                </h2>
              </div>

              <div
                className={`p-3 rounded-xl ${card.bg}`}
              >
                <Icon
                  size={24}
                  className={card.color}
                />
              </div>
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default SummaryCards;