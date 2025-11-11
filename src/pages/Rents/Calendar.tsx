import React, { useState, useCallback, useMemo } from 'react';

// --- Utility Functions ---

interface CalendarDay {
  date: Date | null;
  key: string;
  isCurrentMonth: boolean;
}

/**
 * Returns a list of all dates (including padding days) to display for a given month.
 */
const getCalendarDays = (date: Date): CalendarDay[] => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDayOfWeek = firstDayOfMonth.getDay();

  const calendarDays: CalendarDay[] = [];

  // Padding days
  for (let i = 0; i < startDayOfWeek; i++) {
    calendarDays.push({
      date: null,
      key: `pad-start-${i}`,
      isCurrentMonth: false,
    });
  }

  // Days of current month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      date: new Date(year, month, day),
      key: `${year}-${month + 1}-${day}`,
      isCurrentMonth: true,
    });
  }

  // Trailing padding
  const totalSlots = calendarDays.length;
  const neededTrailingPadding = (7 - (totalSlots % 7)) % 7;
  for (let i = 0; i < neededTrailingPadding; i++) {
    calendarDays.push({
      date: null,
      key: `pad-end-${i}`,
      isCurrentMonth: false,
    });
  }

  return calendarDays;
};

/**
 * Mocks availability status.
 */
const getDayStatus = (date: Date): 'available' | 'booked' => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  if (year === 2026) {
    if (month === 3 || month === 4) {
      if ([1, 2, 3, 7, 24].includes(day)) return 'booked';
    }
  }
  return 'available';
};

// --- Calendar Sub-Component ---

interface CalendarMonthProps {
  monthDate: Date;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({ monthDate }) => {
  const days = getCalendarDays(monthDate);
  const monthName = monthDate.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="p-6 bg-white rounded-xl border-2 flex-1 min-w-[300px]">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{monthName}</h2>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 text-sm font-semibold text-gray-500 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map(({ date, key, isCurrentMonth }) => {
          if (!isCurrentMonth || !date) {
            return <div key={key} className="h-10 w-10"></div>;
          }

          const status = getDayStatus(date);
          const isBooked = status === 'booked';
          const dayNumber = date.getDate();

          const baseClasses =
            'flex items-center justify-center h-10 w-10 text-sm font-medium rounded-full cursor-pointer transition-colors duration-150';
          const statusClasses = isBooked
            ? 'bg-red-100 text-red-700 hover:bg-red-200 border border-red-300'
            : 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-300';

          return (
            <div key={key} className="flex items-center justify-center py-1">
              <button
                className={`${baseClasses} ${statusClasses}`}
                title={
                  isBooked
                    ? `Booked on ${dayNumber}`
                    : `Available on ${dayNumber}`
                }
                onClick={() =>
                  alert(
                    `You clicked on ${date.toDateString()}. Status: ${
                      isBooked ? 'Booked' : 'Available'
                    }`
                  )
                }
              >
                {dayNumber}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- Main Component ---

const Calendar: React.FC = () => {
  const [startMonthDate, setStartMonthDate] = useState(new Date(2026, 3, 1));

  const secondMonthDate = useMemo(
    () =>
      new Date(startMonthDate.getFullYear(), startMonthDate.getMonth() + 1, 1),
    [startMonthDate]
  );

  const handlePrev = useCallback(() => {
    setStartMonthDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  }, []);

  const handleNext = useCallback(() => {
    setStartMonthDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  }, []);

  const navButtonClasses =
    'flex items-center space-x-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-150 p-2 rounded-lg';

  const LegendItem: React.FC<{ color: string; text: string }> = ({
    color,
    text,
  }) => (
    <div className="flex items-center space-x-2 text-sm text-gray-700">
      <span className={`w-3 h-3 rounded-full ${color}`}></span>
      <span>{text}</span>
    </div>
  );

  return (
    <div className="py-20">
      <div className="text-center">
        <p className="text-4xl font-semibold mb-10 text-gray-800">
          Availability Calendar
        </p>
        <p>
          View availability below and take a step closer to paradise. Green
          dates are available for booking, while red dates are already reserved.
        </p>
      </div>

      <div className="mt-10 font-['Inter']">
        <div className="w-full">
          {/* Header & Navigation */}
          <div className="flex justify-between items-center mb-6">
            <button
              className={`${navButtonClasses} text-gray-600`}
              onClick={handlePrev}
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="text-gray-600">Previous</span>
            </button>

            <div className="flex space-x-4">
              <LegendItem color="bg-green-500" text="Available" />
              <LegendItem color="bg-red-500" text="Booked" />
            </div>

            <button
              className={`${navButtonClasses} text-gray-600`}
              onClick={handleNext}
            >
              <span className="text-gray-600">Next</span>
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Two-Month Calendar */}
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
            <CalendarMonth monthDate={startMonthDate} />
            <CalendarMonth monthDate={secondMonthDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
