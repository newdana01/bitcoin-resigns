import { useState } from "react";
import Calendar from "../../../common/components/Calendar";
import { format } from "date-fns";

interface CalendarPickerProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function CalendarPicker({
  selectedDate,
  onSelectDate,
}: CalendarPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="inline-block relative">
      <input
        type="button"
        readOnly
        value={
          selectedDate ? format(selectedDate, "yyyy-MM-dd") : "Select date..."
        }
        className="border border-slate-200 bg-slate-100 rounded-md bg-transparent p-[0.65rem] text-sm
        dark:border-slate-700 dark:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute left-0 mt-2 z-10 min-w-[340px]">
          <Calendar
            selectedDate={selectedDate}
            onSelectDate={(date) => {
              onSelectDate(date);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
