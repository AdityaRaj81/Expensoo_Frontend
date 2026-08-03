import { useSelector } from "react-redux";

import PageHeader from "../../components/common/PageHeader";
import Greeting from "../../components/dashboard/Greeting";
import SummaryCards from "../../components/dashboard/SummaryCards";
import MonthlyOverviewChart from "../../components/dashboard/MonthlyOverviewChart";
import PreviousMonths from "../../components/dashboard/PreviousMonths";
import AddTransactionButton from "../../components/dashboard/AddTransactionButton";

import useDashboard from "../../hooks/useDashboard";

const DashboardPage = () => {

  const { user } = useSelector((state) => state.auth);

  const { dashboard, loading, error, } = useDashboard();

  return (
    <>
      <PageHeader title="Dashboard" />

      {/* Always show logged-in user */}
      <Greeting
        userName={user?.name}
      />

      <AddTransactionButton />

      {loading && (
        <p className="p-6">
          Loading dashboard...
        </p>
      )}

      {error && (
        <p className="p-6 text-red-500">
          {error}
        </p>
      )}

      {!loading && !error && dashboard && (
        <>
          <SummaryCards
            currentBalance={dashboard.monthlyBalance}
            totalIncome={dashboard.monthlyIncome}
            totalExpense={dashboard.monthlyExpense}
          />

          <MonthlyOverviewChart data={dashboard.monthlyOverview}
          />

          <PreviousMonths months={dashboard.monthlyOverview}
          />
        </>
      )}

    </>
  );
};

export default DashboardPage;


