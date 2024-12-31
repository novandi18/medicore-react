import Card from '../shared/Card';

const StatsCard = ({ icon, title, value, comparison, change, max }) => {
  const isPositive = change > 0;
  
  return (
    <Card className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <p className="text-sm text-gray-700 font-medium">{title}</p>
        </div>
        <span className="text-gray-400">...</span>
      </div>
      
      <div className="mt-2">
        <h3 className="text-2xl font-semibold">
          {value}
          {max && <span className="text-gray-400 text-lg">/{max}</span>}
        </h3>
      </div>
      
      <div className="flex items-center gap-2 mt-1">
        <span className="text-sm text-gray-500">{comparison}</span>
        <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '↑' : '↓'} {Math.abs(change)}%
        </span>
      </div>
    </Card>
  );
};

export default StatsCard;