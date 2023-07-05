"use client"
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
// import Chart from "chart.js/auto";


const LineChart = () => {
  const [chartData, setChartData] = useState({});

  const processChartData = (data) => {
    if (!data) {
      console.error("Error: Invalid data.");
      return;
    }

    const stateData = Object.entries(data).slice(0, 5);
    const stateNames = stateData.map(([state]) => state);
    const confirmedData = [];
    const recoveredData = [];

    stateData.forEach(([state, stateDetails]) => {
      const totalData = stateDetails.total;

      confirmedData.push(totalData.confirmed || 0);
      recoveredData.push(totalData.recovered || 0);
    });

    setChartData({
      labels: stateNames,
      datasets: [
        {
          label: "Confirmed Cases",
          data: confirmedData,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Recovered Cases",
          data: recoveredData,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
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
    <div style={{ height: "300px" }}>
      {Object.keys(chartData).length > 0 && (
        <Line data={chartData} options={{ maintainAspectRatio: false }} />
      )}
    </div>
  );
};

export default LineChart;
