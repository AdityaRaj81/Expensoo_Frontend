import Input from "../common/Input";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import Button from "../common/Button";

/**
 * ============================================================
 * Transaction Categories
 * ============================================================
 */

const INCOME_CATEGORIES = [
  { value: "Salary", label: "Salary" },
  { value: "Business", label: "Business" },
  { value: "Freelance", label: "Freelance" },
  { value: "Investment", label: "Investment" },
  { value: "Interest", label: "Interest" },
  { value: "Bonus", label: "Bonus" },
  { value: "Gift", label: "Gift" },
  { value: "Other Income", label: "Other Income" },
];

const EXPENSE_CATEGORIES = [
  { value: "Food", label: "Food" },
  { value: "Shopping", label: "Shopping" },
  { value: "Transport", label: "Transport" },
  { value: "Bills", label: "Bills" },
  { value: "Rent", label: "Rent" },
  { value: "Health", label: "Health" },
  { value: "Education", label: "Education" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Travel", label: "Travel" },
  { value: "Other Expense", label: "Other Expense" },
];

const TransactionForm = ({
  formData,
  onChange,
  onSubmit,
  submitText = "Save Transaction",
  loading = false,

}) => {

  /**
   * ============================================================
   * Category Options
   * ============================================================
   */

  const categoryOptions =

    formData.type === "INCOME"
      ? INCOME_CATEGORIES
      : formData.type === "EXPENSE"
        ? EXPENSE_CATEGORIES
        : [];

  return (

    <form
      onSubmit={onSubmit}
      className="space-y-5"
    >

      {/* Transaction Type */}

      <Select

        label="Transaction Type"
        name="type"
        value={formData.type}
        onChange={onChange}
        options={[
          { value: "INCOME", label: "Income" },
          { value: "EXPENSE", label: "Expense" },
        ]}
        required

      />

      {/* Transaction Category */}

      <Select
        label="Transaction Category"
        name="category"
        value={formData.category}
        onChange={onChange}
        options={categoryOptions}
        placeholder={
          formData.type
            ? "Select a category"
            : "First select transaction type"
        }
        disabled={!formData.type}
        required
      />

      {/* Amount */}

      <Input

        label="Amount"
        type="number"
        name="amount"
        value={formData.amount}
        onChange={onChange}
        min="0.01"
        step="0.01"
        required
      />

      {/* Date */}

      <Input
        label="Date"
        type="date"
        name="date"
        value={formData.date}
        onChange={onChange}
        required
      />

      {/* Notes */}

      <Textarea
        label="Notes"
        name="notes"
        value={formData.notes}
        onChange={onChange}
        rows={4}
        maxLength={500}
      />

      {/* Submit */}

      <div className="pt-2">
        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >

          {loading
            ? "Saving..."
            : submitText}

        </Button>
      </div>
    </form>
  );
};

export default TransactionForm;