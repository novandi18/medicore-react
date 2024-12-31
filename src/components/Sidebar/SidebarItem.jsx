import { Link } from 'react-router-dom';

const SidebarItem = ({ icon, label, count, active, isExpanded }) => {
  return (
    <Link
      to="#"
      className={`
        flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100
        ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}
        ${!isExpanded && 'justify-center'}
      `}
    >
      <span className="text-xl flex-shrink-0">{icon}</span>
      {isExpanded && (
        <>
          <span className="flex-1">{label}</span>
          {count && (
            <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs">
              {count}
            </span>
          )}
        </>
      )}
    </Link>
  );
};

export default SidebarItem;