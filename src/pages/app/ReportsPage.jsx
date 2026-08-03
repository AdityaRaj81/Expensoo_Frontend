import { useState } from "react";

import PageHeader from "../../components/common/PageHeader";

import FilterPanel from "../../components/reports/FilterPanel";
import ExportButtons from "../../components/reports/ExportButtons";

import ExpenseBreakdownChart from "../../components/reports/ExpenseBreakdownChart";
import IncomeExpenseChart from "../../components/reports/IncomeExpenseChart";
import SpendingTrendChart from "../../components/reports/SpendingTrendChart";

import FinancialInsights from "../../components/reports/FinancialInsights";

const ReportsPage = () => {
  const [filters, setFilters] = useState({
    month: "",
    category: "",
    type: "",
    fromDate: "",
    toDate: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    setFilters((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      month: "",
      category: "",
      type: "",
      fromDate: "",
      toDate: "",
    });
  };

  const handleExportPdf = () => {
    // TODO:
    // Connect Backend Export PDF API
  };

  const handleExportExcel = () => {
    // TODO:
    // Connect Backend Export Excel API
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports & Insights"
        subtitle="Analyze your financial activities"
      />

      <FilterPanel
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
      />

      <ExportButtons
        onExportPdf={handleExportPdf}
        onExportExcel={handleExportExcel}
      />

      <ExpenseBreakdownChart data={[]} />

      <IncomeExpenseChart data={[]} />

      <SpendingTrendChart data={[]} />

      <FinancialInsights insights={[]} />
    </div>
  );
};

export default ReportsPage;