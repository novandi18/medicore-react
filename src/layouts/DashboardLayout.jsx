import Sidebar from "../components/Sidebar/Sidebar";

// src/layouts/DashboardLayout.jsx
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-6 ml-20 lg:ml-64 transition-all duration-300">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;