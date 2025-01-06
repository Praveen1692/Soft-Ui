import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import React from "react";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const Chart = () => {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Active Users",
          data: [400, 200, 300, 150, 350, 250],
          backgroundColor: "white",
          borderWidth: 0,
          borderRadius: 2,
          barThickness: 8,
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 8,
          titleColor: 'white',
          bodyColor: 'white',
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: true,
            color: 'white',
            font: {
              size: 12
            }
          },
          border: {
            display: false,
          }
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: true,
            color: 'white',
            font: {
              size: 12
            },
            callback: (value) => `${value}`
          },
          border: {
            display: false,
          }
        },
      },
    };
  
    return (
      <div className=" max-w-lg h-25 bg-slate-900 rounded-lg p-6">
        <Bar data={data} options={options} />
      </div>
    );
  };
  
  export default Chart;