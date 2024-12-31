import Card from '../shared/Card';

const MedicineSupplies = () => {
  const supplies = [
    { name: 'Parachetamol', stock: 140, change: -2.5 },
    { name: 'Anastrozole', stock: 123, change: 3.5 },
    { name: 'Amoxicillin', stock: 80, change: -2.5 },
    { name: 'Bisoprolol', stock: 60, change: 3.5 },
    { name: 'Clonidine', stock: 54, change: -2.5 },
  ];

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">💊</span>
          <h3 className="font-semibold">Medicine supplies</h3>
        </div>
        <span className="text-gray-400">...</span>
      </div>
      
      <div className="space-y-4">
        {supplies.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                💊
              </div>
              <span>{item.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">{item.stock}</span>
              <span className={item.change > 0 ? 'text-green-500' : 'text-red-500'}>
                {item.change > 0 ? '↑' : '↓'} {Math.abs(item.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MedicineSupplies;