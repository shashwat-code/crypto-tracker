import { useState } from "react";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { HistoricalChart } from "../config/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Scale,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const HistoricDataChart = (props) => {
  const [historicData, setHistoricData] = useState(null);
  const fetchData = async () => {
    const data = await fetch(HistoricalChart(props.id, 7, "INR"))
      .then((res) => res.json())
      .then((response) => {
        return response;
      });
    let data2 = data.prices;
    setHistoricData(data["prices"]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (historicData === null) {
    return <>Loading....</>;
  }

  return (
    <div style={{ width: "90%", height: "5%", background: "none" }}>
      <Line
        data={{
          labels: historicData.map((coin, index) => {
            return index;
          }),

          datasets: [
            {
              data: historicData.map((coin) => coin[1]),
              label: `1`,
              borderColor: props.color,
              borderWidth: 0.7,
            },
          ],
        }}
        options={{
          responsive: true,
          color: [{ fillColor: "red" }, { fillColor: "#0066ff" }],
            
          scales: {
            x: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            y: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawBorder: false,
              },
            },
          },

          elements: {
            point: {
              radius: 0,
            },
          },

          plugins: {
            legend: {
              display: false,
            },
            scales: {
              x: {
                ticks: {
                  display: false,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};
export default HistoricDataChart;
