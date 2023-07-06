import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const [chartData, setChartData] = useState({});

  const processChartData = (data) => {
    if (!data) {
      console.error("Error: Invalid data.");
      return;
    }

    const stateData = Object.entries(data).slice(0, 5);
    const stateNames = stateData.map(([state]) => state);
    const totalCasesData = stateData.map(([state, stateDetails]) => {
      const totalData = stateDetails.total;
      return totalData.confirmed || 0;
    });

    setChartData({
      labels: stateNames,
      datasets: [
        {
          label: "Total Cases",
          data: totalCasesData,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#8D42F5",
            "#33FF99",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            const dataset = context.dataset;
            const total = dataset.data.reduce((sum, data) => sum + data, 0);
            const percentage = ((value / total) * 100).toFixed(2);

            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://data.covid19india.org/v4/min/data.min.json"
        );
        const data = await response.json();
        processChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-64 sm:h-96 md:h-80 lg:h-96 md:w-full w-80">
      {Object.keys(chartData).length > 0 && (
        <Pie data={chartData} options={options}/>
      )}
    </div>
  );
};

export default PieChart;
