import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js'; // Use the imported alias for clarity
import { ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Legend, Title ,DoughnutController} from 'chart.js';


// Register the components you're using
ChartJS.register(ArcElement, DoughnutController, CategoryScale, LinearScale, PointElement, LineElement, Legend, Title);

const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Kartikey', 'Kaif', 'Praveen'],
      datasets: [
        {
          label: 'Hours Worked',
          data: [3, 5, 7], // Hours worked by each person
          backgroundColor: ['yellow', 'red', 'orange'],
        },
      ],
    };

    // Clean up function to destroy the chart when the component unmounts
    const chart = new ChartJS(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        cutout: '50%', // Create a hole in the center of the donut
        borderColor: 'gray',
        borderWidth: 1,
        plugins: {
          legend: {
            display: true, // Hide the legend as requested
          },
          title: {
            display: false,
            text: 'Hello',
            padding: {
              top: 10,
              bottom: 10,
            },
            font: {
              size: 24,
              weight: 'bold',
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <div style={{
        backgroundColor: 'white',
       
        padding: '20px',
        borderRadius: '10px',
        width: '350px', // Adjust width for smaller chart size
        height: '350px', // Optional: Set height if desired
      }}>
        <canvas ref={chartRef} />
      </div>
  );
};

export default DonutChart;
