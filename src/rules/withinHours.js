const BUSINESS_HOURS = require("./businessHours");

const withinHours = timeToCheck => {
  const businessHours = BUSINESS_HOURS[timeToCheck.getDay()];

  const openingTime = new Date(timeToCheck.getTime());
  openingTime.setHours(businessHours.openHour, businessHours.openMin);

  const closingTime = new Date(timeToCheck.getTime());
  closingTime.setHours(businessHours.closeHour, businessHours.closeMin);

  const afterOpeningTime = timeToCheck - openingTime;
  const beforeClosingTime = timeToCheck - closingTime;

  return afterOpeningTime >= 0 && beforeClosingTime < 0;
};

module.exports = withinHours;
