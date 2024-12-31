import { useState } from 'react';
import dayjs from 'dayjs';
import Card from '../shared/Card';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  
  // Generate array of weeks for current month
  const generateCalendarDays = () => {
    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');
    const startDay = startOfMonth.day(); // 0-6, 0 is Sunday
    
    // Generate array of all days in month plus padding
    const days = [];
    
    // Add padding for start of month
    for (let i = 0; i < startDay; i++) {
      const day = startOfMonth.subtract(startDay - i, 'day');
      days.push({
        date: day,
        isCurrentMonth: false,
        isToday: false
      });
    }
    
    // Add all days in month
    for (let i = 1; i <= endOfMonth.date(); i++) {
      const day = startOfMonth.date(i);
      days.push({
        date: day,
        isCurrentMonth: true,
        isToday: day.format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')
      });
    }
    
    return days;
  };

  const days = generateCalendarDays();
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const goToNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={goToPreviousMonth}
          className="text-gray-600 hover:text-gray-900"
        >
          ←
        </button>
        
        <h3 className="font-semibold">
          {currentDate.format('MMMM YYYY')}
        </h3>
        
        <button 
          onClick={goToNextMonth}
          className="text-gray-600 hover:text-gray-900"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div 
            key={day} 
            className="text-center text-sm font-medium text-gray-500 py-1"
          >
            {day}
          </div>
        ))}

        {days.map((day, index) => (
          <button
            key={index}
            className={`
              text-sm p-2 text-center rounded-full hover:bg-gray-100
              ${!day.isCurrentMonth && 'text-gray-400'}
              ${day.isToday && 'bg-blue-600 text-white hover:bg-blue-700'}
              ${day.date.day() === 0 && 'text-red-500'}
            `}
          >
            {day.date.date()}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default Calendar;