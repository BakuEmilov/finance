import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { CarFront, ScrollText, ShoppingCart, Volleyball } from "lucide-react";

ChartJS.register(ArcElement);

const data = {
  labels: ["Products", "Transport", "Entertainment", "Communal"],
  datasets: [
    {
      data: [90, 50, 80, 20],
      backgroundColor: ["#647C90", "#E2DED0", "#4E4F50", "#746C70"],
      borderWidth: 1,
    },
  ],
};

const icon = [<ShoppingCart />, <CarFront />, <Volleyball />, <ScrollText />];

const FinanceSummaryChart = () => {
  const filtered = data.labels
    .map((label, index) => ({
      label,
      value: data.datasets[0].data[index],
      icon: icon[index],
      backgroundColor: data.datasets[0].backgroundColor[index],
    }))
    .filter((item) => item.value > 0);

  return (
    <>
      <div className="flex justify-center pt-5 pb-10">
        <div className="w-[300px]">
          <Pie data={data} />
        </div>
      </div>

      <div className="mx-10 flex justify-between gap-10 flex-wrap">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div
              className="w-[60px] h-[60px] mb-3 rounded-full flex items-center justify-center"
              style={{ backgroundColor: item.backgroundColor }}
            >
              {item.icon}
            </div>
            <h1 className="text-[#4E4F50]">{item.label}</h1>
            <p className="font-bold">{item.value} som</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FinanceSummaryChart;
