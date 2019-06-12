const test = require("tape");
const DaysOfWeek = require("../helpers/daysOfWeek");
const createDateTime = require("../helpers/createDateTime");

// Module under test
const twoHoursInFuture = require("../../src/rules/twoHoursInFuture");

// Next Monday at 10am
let currentDateTime = createDateTime(DaysOfWeek.monday, 10);

test("Not more than 2 hours in future", t => {
  let requestedDateTime = createDateTime(DaysOfWeek.monday);
  requestedDateTime.setHours(11, 0, 0, 0);

  const expected = false;

  const actual = twoHoursInFuture(requestedDateTime, currentDateTime);
  t.equal(actual, expected, `Returns false`);
  t.end();
});

test("Is two hours or more in the future", t => {
  let requestedDateTime = createDateTime(DaysOfWeek.monday);
  requestedDateTime.setHours(12, 0, 0, 0);

  const expected = true;

  const actual = twoHoursInFuture(requestedDateTime, currentDateTime);
  t.equal(actual, expected, `Returns true`);
  t.end();
});
// });
