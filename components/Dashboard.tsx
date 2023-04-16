// Dashboard.tsx

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { data } from "../../data/data";

const Dashboard = () => {
    const chartData: ChartData = {
      labels: data.map((item) => item.qualificacio_d_emissions),
      datasets: [
        {
          label: "Current Emissions",
          data: data.map((item) => item.emissions_de_co2),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Improved Emissions",
          data: data.map((item) => item.improved_emissions),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  
    return (
      <div>
        <h2>Dashboard</h2>
        <Doughnut data={chartData} />
      </div>
    );
  };
  
  export default Dashboard;