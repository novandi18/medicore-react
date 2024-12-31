import DashboardLayout from '../layouts/DashboardLayout';
import Header from '../components/Dashboard/Header';
import StatsCard from '../components/Dashboard/StatsCard';
import PatientOverview from '../components/Dashboard/PatientOverview';
import Calendar from '../components/Dashboard/Calendar';
import MedicineSupplies from '../components/Dashboard/MedicineSupplies';
import TopClinics from '../components/Dashboard/TopClinics';
import AppointmentList from '../components/Dashboard/AppointmentList';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Header />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard
          icon="👥"
          title="Overall visitor"
          value="1,478"
          comparison="Compare with last month"
          change={15}
        />
        <StatsCard
          icon="👨‍⚕️"
          title="Total doctors"
          value="210"
          comparison="Compare with last month"
          change={-2.5}
        />
        <StatsCard
          icon="📝"
          title="Book appointment"
          value="321"
          comparison="Compare with last month"
          change={3.5}
        />
        <StatsCard
          icon="🛏"
          title="Room availability"
          value="213"
          max="335"
          comparison="Compare with last month"
          change={-1.5}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="space-y-4">
          <PatientOverview />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MedicineSupplies />
            <TopClinics />
          </div>
        </div>
        <div className="space-y-4">
          <Calendar />
          <AppointmentList />
        </div>
      </div>

    </DashboardLayout>
  );
};

export default Dashboard;