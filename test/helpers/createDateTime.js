const getNextDate = dayOfWeek => {
  let date = new Date();
  while (date.getDay() !== dayOfWeek) {
    date.setDate(date.getDate() + 1);
  }
  return date;
};

const createDateTime = (
  dayOfWeek,
  hour = 11,
  minute = 0,
  second = 0,
  ms = 0
) => {
  let dateTime = getNextDate(dayOfWeek);
  dateTime.setHours(hour);
  dateTime.setMinutes(minute);
  dateTime.setSeconds(second);
  dateTime.setMilliseconds(ms);
  return dateTime;
};

module.exports = createDateTime;
