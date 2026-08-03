import {
  useEffect,
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  useNavigate,
} from "react-router-dom";

import useResponsiveLayout from "../../hooks/useResponsiveLayout";

import PageHeader from "../../components/common/PageHeader";
import EmptyState from "../../components/common/EmptyState";
import Loader from "../../components/common/Loader";

import AddTransactionButton from "../../components/dashboard/AddTransactionButton";

import TransactionFilters from "../../components/transactions/TransactionFilters";
import TransactionCard from "../../components/transactions/TransactionCard";
import TransactionTable from "../../components/transactions/TransactionTable";

import {
  clearTransactionError,
  deleteTransaction,
  fetchTransactions,
} from "../../store/transactionSlice";

const INCOME_CATEGORIES = [
  "Salary",
  "Business",
  "Freelance",
  "Investment",
  "Interest",
  "Bonus",
  "Gift",
  "Other Income",
];

const EXPENSE_CATEGORIES = [
  "Food",
  "Shopping",
  "Transport",
  "Bills",
  "Rent",
  "Health",
  "Education",
  "Entertainment",
  "Travel",
  "Other Expense",
];

const TransactionsPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    isMobile,
  } = useResponsiveLayout();

  const {
    transactions,
    page,
    size,
    totalElements,
    totalPages,
    first,
    last,
    loading,
    error,
  } = useSelector(
    (state) =>
      state.transactions
  );

  const [filters, setFilters] =
    useState({
      search: "",
      type: "",
      category: "",
      fromDate: "",
      toDate: "",
      dateSort: "desc",
      amountSort: "",
    });

  const [currentPage, setCurrentPage] =
    useState(0);

  const getRequestParams = (
    targetPage = currentPage,
    currentFilters = filters
  ) => ({
    page: targetPage,
    size: 20,
    search:
      currentFilters.search,
    type:
      currentFilters.type,
    category:
      currentFilters.category,
    fromDate:
      currentFilters.fromDate,
    toDate:
      currentFilters.toDate,
    dateSort:
      currentFilters.dateSort,
    amountSort:
      currentFilters.amountSort,
  });

  useEffect(() => {

    dispatch(
      fetchTransactions(
        getRequestParams()
      )
    );

  }, [
    dispatch,
    currentPage,
    filters,
  ]);

  useEffect(() => {

    return () => {

      dispatch(
        clearTransactionError()
      );

    };

  }, [dispatch]);

  const handleFilterChange = (
    field,
    value
  ) => {

    setCurrentPage(0);

    setFilters(
      (previous) => {

        if (field === "type") {

          return {
            ...previous,
            type: value,
            category: "",
          };

        }

        return {
          ...previous,
          [field]: value,
        };

      }
    );

  };

  const handleResetFilters = () => {

    setCurrentPage(0);

    setFilters({
      search: "",
      type: "",
      category: "",
      fromDate: "",
      toDate: "",
      dateSort: "desc",
      amountSort: "",
    });

  };

  const getCategoryOptions = () => {

    if (
      filters.type === "INCOME"
    ) {

      return INCOME_CATEGORIES.map(
        (category) => ({
          value: category,
          label: category,
        })
      );

    }

    if (
      filters.type === "EXPENSE"
    ) {

      return EXPENSE_CATEGORIES.map(
        (category) => ({
          value: category,
          label: category,
        })
      );

    }

    return [];

  };

  const categoryOptions =
    getCategoryOptions();

  const handleEditTransaction = (
    transaction
  ) => {

    navigate(
      `/app/transactions/edit/${transaction.id}`
    );

  };

  const handleDeleteTransaction =
    async (
      transaction
    ) => {

      const confirmed =
        window.confirm(
          `Delete ${transaction.category} transaction?`
        );

      if (!confirmed) {
        return;
      }

      try {

        await dispatch(
          deleteTransaction(
            transaction.id
          )
        ).unwrap();

        const shouldGoPreviousPage =
          transactions.length === 1 &&
          currentPage > 0;

        if (
          shouldGoPreviousPage
        ) {

          setCurrentPage(
            (previous) =>
              previous - 1
          );

          return;

        }

        dispatch(
          fetchTransactions(
            getRequestParams()
          )
        );

      } catch (deleteError) {

        console.error(
          deleteError
        );

      }

    };

  const handlePreviousPage = () => {

    if (first) {
      return;
    }

    setCurrentPage(
      (previous) =>
        Math.max(
          previous - 1,
          0
        )
    );

  };

  const handleNextPage = () => {

    if (last) {
      return;
    }

    setCurrentPage(
      (previous) =>
        previous + 1
    );

  };

  return (
    <div className="space-y-6">

      <PageHeader
        title="Transactions"
        subtitle="Manage your income and expenses"
      />

      <AddTransactionButton />

      <TransactionFilters
        search={
          filters.search
        }
        type={
          filters.type
        }
        category={
          filters.category
        }
        fromDate={
          filters.fromDate
        }
        toDate={
          filters.toDate
        }
        dateSort={
          filters.dateSort
        }
        amountSort={
          filters.amountSort
        }
        categoryOptions={
          categoryOptions
        }
        onSearchChange={(
          event
        ) =>
          handleFilterChange(
            "search",
            event.target.value
          )
        }
        onTypeChange={(
          event
        ) =>
          handleFilterChange(
            "type",
            event.target.value
          )
        }
        onCategoryChange={(
          event
        ) =>
          handleFilterChange(
            "category",
            event.target.value
          )
        }
        onFromDateChange={(
          event
        ) =>
          handleFilterChange(
            "fromDate",
            event.target.value
          )
        }
        onToDateChange={(
          event
        ) =>
          handleFilterChange(
            "toDate",
            event.target.value
          )
        }
        onDateSortChange={(
          event
        ) =>
          handleFilterChange(
            "dateSort",
            event.target.value
          )
        }
        onAmountSortChange={(
          event
        ) =>
          handleFilterChange(
            "amountSort",
            event.target.value
          )
        }
        onReset={
          handleResetFilters
        }
      />

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {loading ? (

        <div className="flex min-h-[250px] items-center justify-center">
          <Loader />
        </div>

      ) : transactions.length === 0 ? (

        <EmptyState
          title="No Transactions Found"
          description="No transactions match the selected filters."
        />

      ) : (

        <>
          {isMobile ? (

            <div className="space-y-4">

              {transactions.map(
                (transaction) => (

                  <TransactionCard
                    key={
                      transaction.id
                    }
                    transaction={
                      transaction
                    }
                    onEdit={
                      handleEditTransaction
                    }
                    onDelete={
                      handleDeleteTransaction
                    }
                  />

                )
              )}

            </div>

          ) : (

            <TransactionTable
              transactions={
                transactions
              }
              onEdit={
                handleEditTransaction
              }
              onDelete={
                handleDeleteTransaction
              }
            />

          )}

          <div className="flex flex-col gap-4 rounded-xl border bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="text-sm text-gray-600">

              Page{" "}
              <span className="font-semibold text-gray-900">
                {page + 1}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900">
                {totalPages}
              </span>

              <span className="mx-2">
                ·
              </span>

              <span>
                {totalElements} transactions
              </span>

            </div>

            <div className="flex gap-3">

              <button
                type="button"
                disabled={first}
                onClick={
                  handlePreviousPage
                }
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              <button
                type="button"
                disabled={last}
                onClick={
                  handleNextPage
                }
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>

            </div>

          </div>
        </>

      )}

    </div>
  );
};

export default TransactionsPage;