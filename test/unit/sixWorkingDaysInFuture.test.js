const test = require("tape");
const DaysOfWeek = require("../helpers/daysOfWeek");
const createDateTime = require("../helpers/createDateTime");

// Module under test
const sixWorkingDaysInFuture = require("../../src/rules/sixWorkingDaysInFuture");

// Next Monday at 10am
let currentDateTime = createDateTime(DaysOfWeek.monday, 10);

test.skip("requested time is six working days or less in the future", t => {
  let requestedDateTime = createDateTime(DaysOfWeek.monday);

  requestedDateTime.setDate(currentDateTime.getDate() + 6);
  const expected = true;

  const actual = sixWorkingDaysInFuture(requestedDateTime, currentDateTime);
  t.equal(actual, expected, `Returns true`);
  t.end();
});
