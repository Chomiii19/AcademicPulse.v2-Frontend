import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering Chart.js components for use
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Options for the chart
const options = {
  responsive: true, // Ensures the chart is responsive
  maintainAspectRatio: false, // Allows the chart to stretch based on container size
  plugins: {
    legend: {
      position: 'top' as const, // Position of the legend
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Week', // X-axis label
      },
    },
    y: {
      title: {
        display: true,
        text: 'Time (24-hour format)', // Y-axis label
      },
    },
  },
};

// Data for the chart
const data = {
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'Entry Time',
      data: [7, 9, 10, 11, 8, 11], // Data points for the line graph
      borderColor: '#ED6161', // Line color
      backgroundColor: 'rgba(255, 87, 51, 0.2)', // Background color (optional, for area under line)
      fill: true, // Fill the area under the line
      tension: 0.4, // Smoothness of the line
      pointRadius: 5, // Size of points on the line
      pointBackgroundColor: '#ED6161', // Color of the points on the line
    },
    {
      label: 'Exit Time',
      data: [16, 12, 19, 12, 15, 17], // Data points for the line graph
      borderColor: '#FF5733', // Line color
      backgroundColor: 'rgba(255, 87, 51, 0.2)', // Background color (optional, for area under line)
      fill: true, // Fill the area under the line
      tension: 0.4, // Smoothness of the line
      pointRadius: 5, // Size of points on the line
      pointBackgroundColor: '#FF5733', // Color of the points on the line
    },
  ],
};

// LineChart Component
export default function LineChart() {
  return <Line data={data} options={options} />;
}
