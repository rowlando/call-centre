const withinHours = require("./rules/withinHours");
const twoHoursInFuture = require("./rules/twoHoursInFuture");

// const CallCentre = {
//   canSchedule: function canSchedule(
//     requestedDateTime,
//     currentDateTime = new Date()
//   ) {
//     return (
//       withinHours(requestedDateTime, currentDateTime) &&
//       twoHoursInFuture(requestedDateTime, currentDateTime)
//     );
//   }
// };

class CallCentre {
  scheduleRules = [];
  constructor(scheduleRules) {
    this.scheduleRules = scheduleRules;
  }

  canSchedule(requestedDateTime, currentDateTime = new Date()) {
    let canSchedule = false;
    let scheduleRules = this.scheduleRules;

    for (let i = 0; i < scheduleRules.length; i++) {
      canSchedule = scheduleRules[i](requestedDateTime, currentDateTime);
      if (!canSchedule) {
        break;
      }
    }

    return canSchedule;
  }
}

module.exports = CallCentre;
