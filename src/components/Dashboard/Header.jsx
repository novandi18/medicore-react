import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex-1">
        <div className="relative">
          <p className="font-bold text-xl">Welcome back, Darrell👋</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-900 flex items-center px-4 py-2 gap-2 border rounded-lg border-gray-400">
          <ArrowDownTrayIcon className="w-4 h-4" />
          <span>Export CSV</span>
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add new
        </button>
      </div>
    </div>
  );
};

export default Header;