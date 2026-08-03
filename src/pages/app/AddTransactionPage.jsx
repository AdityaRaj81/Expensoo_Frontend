import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../../components/common/Card";
import PageHeader from "../../components/common/PageHeader";
import TransactionForm from "../../components/transactions/TransactionForm";

import { createTransaction } from "../../store/transactionSlice";

/**
 * Returns today's date in YYYY-MM-DD format
 * using the user's local date.
 */
const getTodayDate = () => {
  const today = new Date();

  const year = today.getFullYear();

  const month = String(
    today.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    today.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const AddTransactionPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, error } = useSelector(
    (state) => state.transactions
  );

  const [formData, setFormData] = useState({

    type: "",

    category: "",

    amount: "",

    date: getTodayDate(),

    notes: "",

  });

  /**
   * ============================================================
   * Handle Form Change
   * ============================================================
   */
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((previous) => {

      /*
       * When transaction type changes,
       * clear the previous category.
       *
       * Example:
       * EXPENSE -> Food
       * then EXPENSE -> INCOME
       *
       * Food must not remain selected.
       */
      if (name === "type") {

        return {

          ...previous,

          type: value,

          category: "",

        };

      }

      return {

        ...previous,

        [name]: value,

      };

    });

  };

  /**
   * ============================================================
   * Handle Submit
   * ============================================================
   */
  const handleSubmit = async (event) => {

    event.preventDefault();

    const transactionData = {

      type: formData.type,

      category: formData.category.trim(),

      amount: Number(formData.amount),

      date: formData.date,

      notes: formData.notes.trim() || null,

    };

    try {

      await dispatch(
        createTransaction(transactionData)
      ).unwrap();

      /*
       * Transaction successfully saved.
       *
       * Return user to transactions page.
       */
      navigate(
        "/app/transactions",
        {
          replace: true,
        }
      );

    } catch (submitError) {

      console.error(
        "Failed to create transaction:",
        submitError
      );

    }

  };

  return (

    <div className="space-y-6">

      <PageHeader
        title="Add Transaction"
        subtitle="Create a new income or expense transaction"
      />

      <Card>

        {error && (

          <div
            className="
              mb-5
              rounded-lg
              border
              border-red-200
              bg-red-50
              px-4
              py-3
              text-sm
              text-red-700
            "
          >
            {error}
          </div>

        )}

        <TransactionForm

          formData={formData}

          onChange={handleChange}

          onSubmit={handleSubmit}

          submitText="Add Transaction"

          loading={loading}

        />

      </Card>

    </div>

  );

};

export default AddTransactionPage;