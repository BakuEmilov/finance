import { ExpenseIncomeToggle } from "@/widgets/expense-income-toggle";
import { FinanceSummaryChart } from "@/widgets/finance-summary-chart";
import { PeriodFilter } from "@/widgets/period-filter";

const MainPage = () => {
  return (
    <>
      <ExpenseIncomeToggle />

      <PeriodFilter />

      <FinanceSummaryChart />
    </>
  );
};

export default MainPage;
