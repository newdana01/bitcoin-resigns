import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  isSameMonth,
  isSameDay,
  eachDayOfInterval,
} from "date-fns";

interface CalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function Calendar({
  selectedDate,
  onSelectDate,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // 최소/최대 날짜
  const minDate = new Date(2017, 7, 17); // 2017-08-17
  const maxDate = new Date(); // 오늘

  // 이번 달 범위
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // 연도 드롭다운 범위
  const years = Array.from(
    { length: maxDate.getFullYear() - minDate.getFullYear() + 1 },
    (_, i) => minDate.getFullYear() + i,
  );

  // 월 드롭다운 (연도에 따라 범위 제한)
  const months = Array.from({ length: 12 }, (_, i) => ({
    value: i,
    label: format(new Date(2000, i), "MMMM"),
  })).filter((m) => {
    const year = currentMonth.getFullYear();
    if (year === minDate.getFullYear() && m.value < minDate.getMonth())
      return false;
    if (year === maxDate.getFullYear() && m.value > maxDate.getMonth())
      return false;
    return true;
  });

  // 변경 핸들러
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.target.value, 10);
    let newMonth = currentMonth.getMonth();

    // min/max 범위 보정
    if (newYear === minDate.getFullYear() && newMonth < minDate.getMonth()) {
      newMonth = minDate.getMonth();
    }
    if (newYear === maxDate.getFullYear() && newMonth > maxDate.getMonth()) {
      newMonth = maxDate.getMonth();
    }

    setCurrentMonth(new Date(newYear, newMonth));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value, 10);
    setCurrentMonth(new Date(currentMonth.getFullYear(), newMonth));
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-slate-200 dark:bg-gray-800 shadow rounded-2xl">
      {/* 드롭다운 헤더 */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <select
          value={currentMonth.getMonth()}
          onChange={handleMonthChange}
          className="rounded p-1 bg-transparent"
        >
          {months.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>

        <select
          value={currentMonth.getFullYear()}
          onChange={handleYearChange}
          className="rounded p-1 bg-transparent"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 text-center font-medium text-gray-600">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      {/* 날짜 */}
      <div className="grid grid-cols-7 text-center">
        {days.map((day) => {
          const isCurrentMonth = isSameMonth(day, monthStart);
          const isSelected = selectedDate && isSameDay(day, selectedDate);

          return (
            <button
              key={day.toString()}
              onClick={() => onSelectDate(day)}
              className={`
                m-1 p-2 rounded-full
                ${isCurrentMonth ? "dark:text-white" : "text-gray-400 dark:text-gray-500"}
                ${isSelected ? "bg-primary-orange text-white" : "hover:bg-primary-orange"}
              `}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}
