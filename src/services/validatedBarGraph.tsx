import { Bar } from 'react-chartjs-2';

const options = {
  responsive: true, // Ensures the chart is responsive
  maintainAspectRatio: false, // Allows the chart to stretch based on container size
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const data = {
  labels: ['May', 'June', 'July', 'Aug', 'Sept'],
  datasets: [
    {
      label: 'Validated ID count',
      data: [205, 19, 64, 32, 172],
      backgroundColor: ['#ED6161', '#ED6161', '#ED6161'],
    },
  ],
};

export default function BarChart() {
  return <Bar data={data} options={options} />;
}
