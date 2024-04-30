import React, { useEffect, useRef } from 'react';
import { Chart, BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components you're using
Chart.register(BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Tuesday', 'Wednesday'], // Add more days as needed
        datasets: [
          {
            label: 'Kartikey',
            data: [3, 5], // Hours worked on Tuesday and Wednesday
            backgroundColor: 'yellow',
            barThickness: 50, // Adjust the thickness of the bars here
          },
          {
            label: 'Kaif',
            data: [1, 4], // Hours worked on Tuesday and Wednesday
            backgroundColor: 'red',
            barThickness: 50, // Adjust the thickness of the bars here
          },
          {
            label: 'Praveen',
            data: [7, 6], // Hours worked on Tuesday and Wednesday
            backgroundColor: 'orange',
            barThickness: 50, // Adjust the thickness of the bars here
          },
        ],
      },
      options: {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function(context) {
          var label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          label += context.formattedValue;
          return label;
        }
      }
    }
  }
}
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div style={{ 
        backgroundColor: 'white', 
        boxShadow: "1px 1px 1px 1px rgba(0.5, 0, 0, 0.1)",
        padding: '20px', 
        borderRadius: '0px',
        width: '500px',
      }}>
        <canvas ref={chartRef} />
      </div>
      
  );
};

export default StackedBarChart;