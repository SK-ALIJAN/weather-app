export const Day = (index) => {
  let dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return dayName[index];
};

export const Month = (index) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[index];
};

export const farmattedDate = () => {
  const today = new Date();
  const dayIndex = today.getDay();
  const monthIndex = today.getMonth();

  const dayName = Day(dayIndex);
  const monthName = Month(monthIndex);
  const date = today.getDate();

  return `${dayName}, ${date}th of ${monthName}`;
};
