const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const dateBuilder = (d) => {
  const DAY = DAYS[d.getDay()];
  const DATE = d.getDate();
  const MONTH = MONTHS[d.getMonth()];
  const YEAR = d.getFullYear();

  return `${DAY} ${DATE} ${MONTH} ${YEAR}`;
};

export default dateBuilder;
