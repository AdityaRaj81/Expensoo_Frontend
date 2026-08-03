import { useEffect, useState } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Card from "../../components/common/Card";
import PageHeader from "../../components/common/PageHeader";
import Loader from "../../components/common/Loader";
import TransactionForm from "../../components/transactions/TransactionForm";

import {
  fetchTransactionById,
  updateTransaction,
  clearCurrentTransaction,
  clearTransactionError,
} from "../../store/transactionSlice";

const EditTransactionPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    currentTransaction,
    loading,
    error,
  } = useSelector(
    (state) => state.transactions
  );

  const [formData, setFormData] = useState({
    type: "",
    category: "",
    amount: "",
    date: "",
    notes: "",
  });

  const [initialized, setInitialized] =
    useState(false);

  useEffect(() => {
    setInitialized(false);

    dispatch(clearTransactionError());
    dispatch(clearCurrentTransaction());
    dispatch(fetchTransactionById(id));

    return () => {
      dispatch(clearCurrentTransaction());
      dispatch(clearTransactionError());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (
      currentTransaction &&
      String(currentTransaction.id) === String(id)
    ) {
      setFormData({
        type:
          currentTransaction.type || "",
        category:
          currentTransaction.category || "",
        amount:
          currentTransaction.amount ?? "",
        date:
          currentTransaction.date || "",
        notes:
          currentTransaction.notes || "",
      });

      setInitialized(true);
    }
  }, [currentTransaction, id]);

  const handleChange = (event) => {
    const { name, value } =
      event.target;

    setFormData((previous) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const transactionData = {
      type: formData.type,
      category:
        formData.category.trim(),
      amount: Number(formData.amount),
      date: formData.date,
      notes:
        formData.notes.trim() || null,
    };

    try {
      await dispatch(
        updateTransaction({
          id,
          data: transactionData,
        })
      ).unwrap();

      navigate(
        "/app/transactions",
        {
          replace: true,
        }
      );
    } catch (updateError) {
      console.error(updateError);
    }
  };

  if (loading && !initialized) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Edit Transaction"
        subtitle="Update your transaction details"
      />

      <Card>
        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {initialized && (
          <TransactionForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitText="Save Changes"
            loading={loading}
          />
        )}
      </Card>
    </div>
  );
};

export default EditTransactionPage;