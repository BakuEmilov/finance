import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

const pieData = {
  labels: ["Продукты", "Транспорт", "Развлечения", "Коммуналка"],
  datasets: [
    {
      data: [0, 0, 0, 0],
      backgroundColor: ["#647C90", "#E2DED0", "#4E4F50", "#746C70"],
      borderWidth: 1,
    },
  ],
};

const FinanceSummaryChart = () => {
  const isEmpty =
    pieData.datasets[0].data.reduce((acc, val) => acc + val, 0) === 0;

  const absolute = pieData.datasets[0].data.reduce((acc, val) => acc + val, 0);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[300px] h-[300px]">
        {isEmpty ? (
          <div className="rounded-full w-[300px] h-[300px] bg-[#4E4F50] text-white flex items-center justify-center">
            <p>На этой неделе расходов не было</p>
          </div>
        ) : (
          <Pie data={pieData} />
        )}
        <p className="text-center mt-5">
          Общая сумма: <span className="font-bold">{absolute}</span> сом
        </p>
      </div>
    </div>
  );
};

export default FinanceSummaryChart;
