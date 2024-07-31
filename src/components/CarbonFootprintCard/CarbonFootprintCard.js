import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CarbonFootprintCard = ({ data, chartType, footprint }) => {
  const chartRef = useRef();

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2>Your Carbon Footprint: {footprint} kg CO2</h2>
      <Bar ref={chartRef} data={data} />
    </div>
  );
};

export default CarbonFootprintCard;