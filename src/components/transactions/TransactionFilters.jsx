import {
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

import Input from "../common/Input";
import Select from "../common/Select";

const TransactionFilters = ({
  search,
  onSearchChange,

  type,
  onTypeChange,

  category,
  onCategoryChange,
  categoryOptions = [],

  fromDate,
  onFromDateChange,

  toDate,
  onToDateChange,

  dateSort,
  onDateSortChange,

  amountSort,
  onAmountSortChange,

  onReset,
}) => {
  const [filtersOpen, setFiltersOpen] =
    useState(false);

  useEffect(() => {
    if (!filtersOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setFiltersOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [filtersOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() =>
          setFiltersOpen(true)
        }
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
      >
        <SlidersHorizontal size={16} />

        Filters
      </button>

      {filtersOpen && (
        <div className="fixed inset-0 z-50">

          <button
            type="button"
            aria-label="Close filters"
            onClick={() =>
              setFiltersOpen(false)
            }
            className="
              absolute
              inset-0
              h-full
              w-full
              bg-black/30
              backdrop-blur-[1px]
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              max-h-[90vh]
              overflow-y-auto
              rounded-t-2xl
              bg-white
              shadow-2xl

              sm:left-1/2
              sm:right-auto
              sm:top-1/2
              sm:bottom-auto
              sm:w-[calc(100%-2rem)]
              sm:max-w-2xl
              sm:-translate-x-1/2
              sm:-translate-y-1/2
              sm:rounded-xl

              lg:max-w-3xl
            "
          >

            <div
              className="
                sticky
                top-0
                z-10
                flex
                items-center
                justify-between
                border-b
                border-gray-200
                bg-white
                px-4
                py-3
              "
            >

              <div className="flex items-center gap-2">

                <Filter
                  size={16}
                  className="text-gray-600"
                />

                <h2 className="text-sm font-semibold text-gray-900">
                  Filters
                </h2>

              </div>

              <div className="flex items-center gap-2">

                <button
                  type="button"
                  onClick={onReset}
                  className="
                    rounded-md
                    px-2
                    py-1
                    text-xs
                    font-medium
                    text-gray-600
                    transition
                    hover:bg-gray-100
                    hover:text-gray-900
                  "
                >
                  Reset
                </button>

                <button
                  type="button"
                  aria-label="Close filters"
                  onClick={() =>
                    setFiltersOpen(false)
                  }
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    text-gray-500
                    transition
                    hover:bg-gray-100
                    hover:text-gray-900
                  "
                >
                  <X size={17} />
                </button>

              </div>

            </div>

            <div className="p-4">

              <div className="mb-3">

                <Input
                  name="search"
                  label="Search"
                  placeholder="Search transactions..."
                  value={search}
                  onChange={onSearchChange}
                  leftIcon={
                    <Search size={15} />
                  }
                />

              </div>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-3
                  gap-y-3
                "
              >

                <Select
                  name="type"
                  label="Type"
                  value={type}
                  onChange={onTypeChange}
                  placeholder="All Types"
                  options={[
                    {
                      value: "INCOME",
                      label: "Income",
                    },
                    {
                      value: "EXPENSE",
                      label: "Expense",
                    },
                  ]}
                />

                <Select
                  name="category"
                  label="Category"
                  value={category}
                  onChange={onCategoryChange}
                  placeholder={
                    type
                      ? "All Categories"
                      : "Select Type"
                  }
                  options={categoryOptions}
                  disabled={!type}
                />

                <Input
                  label="From"
                  name="fromDate"
                  type="date"
                  value={fromDate}
                  onChange={onFromDateChange}
                  max={toDate || undefined}
                />

                <Input
                  label="To"
                  name="toDate"
                  type="date"
                  value={toDate}
                  onChange={onToDateChange}
                  min={fromDate || undefined}
                />

                <Select
                  name="dateSort"
                  label="Date Order"
                  value={dateSort}
                  onChange={onDateSortChange}
                  options={[
                    {
                      value: "desc",
                      label: "Newest → Oldest",
                    },
                    {
                      value: "asc",
                      label: "Oldest → Newest",
                    },
                  ]}
                />

                <Select
                  name="amountSort"
                  label="Amount Order"
                  value={amountSort}
                  onChange={onAmountSortChange}
                  placeholder="No Order"
                  options={[
                    {
                      value: "desc",
                      label: "Highest → Lowest",
                    },
                    {
                      value: "asc",
                      label: "Lowest → Highest",
                    },
                  ]}
                />

              </div>

              <button
                type="button"
                onClick={() =>
                  setFiltersOpen(false)
                }
                className="
                  mt-4
                  w-full
                  rounded-lg
                  bg-blue-600
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Apply Filters
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default TransactionFilters;