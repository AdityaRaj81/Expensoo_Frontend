import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";

const AddTransactionButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/app/transactions/add");
  };

  return (
    <div className="mb-6">
      <Button
        onClick={handleClick}
        leftIcon={<Plus size={18} />}
        className="w-full sm:w-auto"
      >
        Add Transaction
      </Button>
    </div>
  );
};

export default AddTransactionButton;
