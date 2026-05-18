"use client";

import Image from "next/image";

export function Calendar({ year = 2025, month = 9, highlightDay = 8 }) {
  const weekDays = ["Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ", "Կիր"];

  const firstDayRaw = new Date(year, month - 1, 1).getDay();
  const firstDay = (firstDayRaw + 6) % 7;
  
  const daysInMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];

  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <div className="FontSHK_Dzeragir text-black  text-[18px] text-center mt-7">
      <div className="FontSHK_Dzeragir grid grid-cols-7  text-black">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 text-sm">
        {calendarDays.map((day, idx) =>
          day ? (
            <div
              key={idx}
              className=" relative py-2 rounded-full  text-3xl flex items-center justify-center "
            >
              {day === highlightDay && (
                <Image
                  src="/icon3.png"
                  alt="icon1"
                  width={500}
                  height={500}
                  className="w-8 absolute -right-4 -top-2 rotate-22"
                />
              )}
              <p>{day}</p>
            </div>
          ) : (
            <div key={idx}></div>
          ),
        )}
      </div>
    </div>
  );
}
