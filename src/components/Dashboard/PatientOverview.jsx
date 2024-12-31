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
  Filler
} from 'chart.js';
import Card from '../shared/Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PatientOverview = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12,
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'white',
        titleColor: '#374151',
        bodyColor: '#374151',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 12,
        displayColors: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12
          },
          color: '#9CA3AF'
        }
      },
      y: {
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 200,
          font: {
            size: 12
          },
          color: '#9CA3AF'
        },
        grid: {
          color: '#F3F4F6',
          drawBorder: false,
        },
        border: {
          dash: [8, 4]
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hoverRadius: 6
      }
    }
  };

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Total patients',
        data: [700, 400, 500, 300, 500, 650, 300, 400, 500, 650, 400, 600],
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        fill: true,
        borderWidth: 2,
      },
      {
        label: 'Avg. Hospitalized patients',
        data: months.map(() => 283), // Constant line at 283
        borderColor: '#93C5FD',
        backgroundColor: 'rgba(147, 197, 253, 0.1)',
        borderDash: [5, 5],
        fill: true,
        borderWidth: 2,
      }
    ]
  };

  return (
    <Card className="col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xl">👥</span>
          <h3 className="font-semibold">Patient overview</h3>
        </div>
        <select className="px-3 py-1.5 border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Total patients</p>
          <p className="text-2xl font-semibold">839</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Avg. Hospitalized patients</p>
          <p className="text-2xl font-semibold">283</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Avg. Outpatient care</p>
          <p className="text-2xl font-semibold">421</p>
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <Line options={options} data={data} />
      </div>
    </Card>
  );
};

export default PatientOverview;