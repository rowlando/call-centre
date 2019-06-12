const twoHoursInFuture = (requestedDateTime, currentDateTime) => {
  const twoHoursInMillis = 1000 * 60 * 120;
  return requestedDateTime - currentDateTime >= twoHoursInMillis;
};

module.exports = twoHoursInFuture;
