import { Button } from "@heroui/react";
import React from "react";

const ExpenseIncomeToggle = () => {
  const [tab, setTab] = React.useState<"expense" | "income">("expense");

  return (
    <>
      <div className="flex px-2">
        <div className="flex-1">
          <Button
            className="w-full"
            variant="light"
            onPress={() => setTab("expense")}
            radius="none"
            size="lg"
          >
            Expense
          </Button>
          <hr
            className={`transition-all duration-500 ${
              tab === "expense" ? "bg-black" : "text-gray-200"
            }`}
          />
        </div>
        <div className="flex-1">
          <Button
            className="w-full"
            variant="light"
            onPress={() => setTab("income")}
            radius="none"
            size="lg"
          >
            Income
          </Button>
          <hr
            className={`transition-all duration-300 ${
              tab === "income" ? "bg-black" : "text-gray-200"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default ExpenseIncomeToggle;
