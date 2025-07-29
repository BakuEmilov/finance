import { Button } from "@heroui/react";
import React from "react";

const PeriodFilter = () => {
  const [filter, setFilter] = React.useState<
    "day" | "week" | "month" | "period"
  >("day");

  return (
    <div className="flex items-center justify-around py-2">
      <Button
        variant={`${filter === "day" ? "solid" : "light"}`}
        onPress={() => setFilter("day")}
      >
        Day
      </Button>

      <Button
        variant={`${filter === "week" ? "solid" : "light"}`}
        onPress={() => setFilter("week")}
      >
        Week
      </Button>

      <Button
        variant={`${filter === "month" ? "solid" : "light"}`}
        onPress={() => setFilter("month")}
      >
        Month
      </Button>

      <Button
        variant={`${filter === "period" ? "solid" : "light"}`}
        onPress={() => setFilter("period")}
      >
        Period
      </Button>
    </div>
  );
};

export default PeriodFilter;
