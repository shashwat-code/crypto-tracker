import { useState } from "react";
import { useEffect } from "react";
import { Line,Area } from "react-chartjs-2";
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
import { Grid } from "@mui/material";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const HistoryChartModuleDetail = (props) => {
  const [historicData, setHistoricData] = useState(null);
  const fetchData = async () => {
    const data = await fetch(HistoricalChart(props.id, props.timeline, "INR"))
      .then((res) => res.json())
      .then((response) => {
        return response;
      });
    console.log(data)
    setHistoricData(data["prices"]);
    console.log(historicData)
  };

  useEffect(() => {
    fetchData();
  }, [props.timeline]);

  if (historicData === null) {
    return <>Loading....</>;
  }

  return (
    <Grid item lg={12}>
      <Line
        data={{
          labels: historicData.map((i,index)=>{return index}),

          datasets: [{
            label: 'My First Dataset',
            data: historicData.map((coin) => coin[1]),
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4
          }],
        }}
        options={{
          responsive: true,
          color: [{ fillColor: "red" }, { fillColor: "green" }],
          // tension:1,
            
          scales: {
            x: {
              ticks: {
                callback: function(val, index) {
                  // Hide every 2nd tick label
                  return index? this.getLabelForValue(val) : '';
                },
                display: true,
              },
              grid: {
                display: false,
                drawBorder: true,
              },
            },
            y: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawBorder: true,
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
    </Grid>
  );
};

export default HistoryChartModuleDetail