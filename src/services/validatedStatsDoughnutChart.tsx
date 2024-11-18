import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  TooltipItem,
} from 'chart.js';

// Register required components with Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale
);

const data = {
  labels: ['Enrolled', 'Validated'], // Labels for each section
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 212], // Data points for each section
      backgroundColor: ['#FF5733', '#ED6161'], // Colors for each section
      hoverOffset: 4, // Hover effect to make the slice bigger
      borderWidth: 3,
      borderColor: '#161616',
    },
  ],
};

const options = {
  responsive: true, // Ensures the chart is responsive
  maintainAspectRatio: false, // Allows the chart to stretch based on container size
  plugins: {
    legend: {
      position: 'top' as const, // Position of the legend
    },
    tooltip: {
      callbacks: {
        label: function (context: TooltipItem<'doughnut'>) {
          return `${context.label}: ${context.raw}`; // Customize tooltips
        },
      },
    },
  },
  cutout: '80%',
};

export default function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
