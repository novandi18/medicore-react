import { Doughnut } from 'react-chartjs-2';
import { ArcElement } from 'chart.js';
import Card from '../shared/Card';
import { Chart as ChartJS } from 'chart.js';

ChartJS.register(ArcElement);

const TopClinics = () => {
  const data = {
    datasets: [{
      data: [120, 249, 165],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(99, 102, 241)',
        'rgb(239, 68, 68)',
      ],
    }],
    labels: ['Dental', 'Internist', 'Neurologist'],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏥</span>
          <h3 className="font-semibold">Top 3 in-demand clinics</h3>
        </div>
        <span className="text-gray-400">...</span>
      </div>
      
      <div className="relative h-48">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <p className="text-2xl font-semibold">534</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        {data.labels.map((label, index) => (
          <div key={label} className="text-center">
            <p className="text-lg font-semibold">{data.datasets[0].data[index]}</p>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopClinics;