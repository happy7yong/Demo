// utils/dateUtils.ts
export const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

export const generateCalendarMatrix = (month, year) => {
  const daysInMonth = getDaysInMonth(month + 1, year);
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const calendarMatrix = [];
  let week = [];
  let day = 1;

  // Fill initial empty days
  for (let i = 0; i < firstDayOfMonth; i++) {
    week.push(null);
  }

  // Fill days of the month
  for (let i = firstDayOfMonth; i < 7; i++) {
    week.push(day++);
  }
  calendarMatrix.push(week);

  while (day <= daysInMonth) {
    week = [];
    for (let i = 0; i < 7 && day <= daysInMonth; i++) {
      week.push(day++);
    }
    calendarMatrix.push(week);
  }

  // Fill remaining empty days
  while (week.length < 7) {
    week.push(null);
  }

  return calendarMatrix;
};
