import Card from '../shared/Card';
import personImage from '../../assets/person.jpg';

const AppointmentList = () => {
  const appointments = [
    {
      id: 1,
      patientName: "Esther Howard",
      specialty: "Poly dental",
      time: "09:40",
      image: personImage
    },
    {
      id: 2,
      patientName: "Arlene McCoy",
      specialty: "Psychiatrist",
      time: "09:40",
      image: personImage
    },
    {
      id: 3,
      patientName: "Guy Hawkins",
      specialty: "Internist",
      time: "09:40",
      image: personImage
    },
    {
      id: 4,
      patientName: "Courtney Henry",
      specialty: "Ophtalmologist",
      time: "09:40",
      image: personImage
    },
    {
      id: 5,
      patientName: "Annette Black",
      specialty: "Neurologist",
      time: "09:40",
      image: personImage
    }
  ];

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">📅</span>
          <h3 className="font-semibold">Appointment</h3>
        </div>
        <span className="text-gray-400">...</span>
      </div>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3">
              <img
                src={appointment.image}
                alt={appointment.patientName}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{appointment.patientName}</p>
                <p className="text-sm text-gray-500">{appointment.specialty}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded text-sm">
                Today
              </span>
              <span className="text-gray-500">{appointment.time}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AppointmentList;