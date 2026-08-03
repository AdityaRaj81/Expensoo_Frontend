import Card from "../common/Card";
import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

const FilterPanel = ({
  filters,
  onFilterChange,
  onReset,
}) => {
  return (
    <Card
      title="Filters"
      subtitle="Filter report data"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

        <Select
          label="Month"
          name="month"
          value={filters.month}
          onChange={onFilterChange}
          options={[]}
        />

        <Select
          label="Category"
          name="category"
          value={filters.category}
          onChange={onFilterChange}
          options={[]}
        />

        <Select
          label="Transaction Type"
          name="type"
          value={filters.type}
          onChange={onFilterChange}
          options={[
            {
              label: "Income",
              value: "INCOME",
            },
            {
              label: "Expense",
              value: "EXPENSE",
            },
          ]}
        />

        <Input
          label="From Date"
          type="date"
          name="fromDate"
          value={filters.fromDate}
          onChange={onFilterChange}
        />

        <Input
          label="To Date"
          type="date"
          name="toDate"
          value={filters.toDate}
          onChange={onFilterChange}
        />

      </div>

      <div className="mt-6 flex justify-end">

        <Button
          variant="secondary"
          onClick={onReset}
        >
          Reset Filters
        </Button>

      </div>
    </Card>
  );
};

export default FilterPanel;