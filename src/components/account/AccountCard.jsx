import Card from "../common/Card";
import { ChevronRight } from "lucide-react";

const AccountCard = ({
  icon: Icon,
  title,
  description,
  onClick,
  danger = false,
}) => {
  return (
    <Card
      hover
      onClick={onClick}
      className="cursor-pointer"
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-lg
              ${danger
                ? "bg-red-100 text-red-600"
                : "bg-blue-100 text-blue-600"
              }
            `}
          >
            <Icon size={22} />
          </div>

          <div>

            <h3
              className={`font-semibold ${danger
                  ? "text-red-600"
                  : "text-gray-900"
                }`}
            >
              {title}
            </h3>

            {description && (
              <p className="mt-1 text-sm text-gray-500">
                {description}
              </p>
            )}

          </div>

        </div>

        <ChevronRight
          size={20}
          className="text-gray-400"
        />

      </div>
    </Card>
  );
};

export default AccountCard;