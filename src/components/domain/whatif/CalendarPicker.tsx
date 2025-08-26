import { useState } from "react";
import Calendar from "../../../common/components/Calendar";
import { format } from "date-fns";

export default function CalendarPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="inline-block relative">
      <input
        type="button"
        readOnly
        value={
          selectedDate ? format(selectedDate, "yyyy-MM-dd") : "Select date..."
        }
        className="border border-slate-700 rounded-md bg-transparent p-[0.65rem]"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute left-0 mt-2 z-10 min-w-[340px]">
          <Calendar
            selectedDate={selectedDate}
            onSelectDate={(date) => {
              setSelectedDate(date);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
