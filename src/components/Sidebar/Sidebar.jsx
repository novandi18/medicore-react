import { useEffect, useState } from 'react';
import SidebarItem from './SidebarItem';
import useWindowSize from '../../hook/useWindowSize';
import { SunIcon } from '@heroicons/react/16/solid';
import personImage from '../../assets/person.jpg';

const Sidebar = () => {
  const { width } = useWindowSize();
  const [isExpanded, setIsExpanded] = useState(width >= 1024); // 1024px is tailwind's lg breakpoint

  // Update isExpanded when screen size changes
  useEffect(() => {
    setIsExpanded(width >= 1024);
  }, [width]);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${
          isExpanded ? 'block' : 'hidden'
        }`}
        onClick={() => setIsExpanded(false)}
      />

      <div className={`
        fixed top-0 left-0 h-full bg-white border-r z-30
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-64' : 'w-20'}
        flex flex-col
      `}>
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <SunIcon className='text-white w-4 h-4' />
            </div>
            <h1 className={`text-xl font-semibold transition-opacity duration-300 ${
              isExpanded ? 'opacity-100' : 'opacity-0 w-0'
            }`}>
              Medicore
            </h1>
          </div>

        </div>

        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-1 px-2">
            <SidebarItem icon="📊" label="Dashboard" active isExpanded={isExpanded} />
            <SidebarItem icon="📅" label="Schedule" isExpanded={isExpanded} />
            <SidebarItem icon="💰" label="Transaction" isExpanded={isExpanded} />
            <SidebarItem icon="💬" label="Message" count={10} isExpanded={isExpanded} />
            <SidebarItem icon="🔔" label="Notification" count={12} isExpanded={isExpanded} />
          </nav>

          <div className="mt-8">
            <p className={`px-4 text-xs font-medium text-gray-400 mb-2 ${
              isExpanded ? 'block' : 'hidden'
            }`}>
              MANAGEMENT
            </p>
            <nav className="space-y-1 px-2">
              <SidebarItem icon="🛏" label="Bedroom" isExpanded={isExpanded} />
              <SidebarItem icon="💊" label="Medicine" isExpanded={isExpanded} />
              <SidebarItem icon="📝" label="Appointment" isExpanded={isExpanded} />
              <SidebarItem icon="👥" label="Patient" isExpanded={isExpanded} />
              <SidebarItem icon="👨‍⚕️" label="Doctor" isExpanded={isExpanded} />
            </nav>
          </div>
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <img
              src={personImage}
              alt="Admin"
              className="w-10 h-10 rounded-full flex-shrink-0"
            />
            <div className={`transition-opacity duration-300 ${
              isExpanded ? 'opacity-100' : 'opacity-0 w-0'
            }`}>
              <p className="font-medium">Medicore</p>
              <p className="text-sm text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;