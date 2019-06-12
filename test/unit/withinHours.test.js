const test = require("tape");
const createDateTime = require("../helpers/createDateTime");
const DaysOfWeek = require("../helpers/daysOfWeek");

// Module under test
const withinHours = require("../../src/rules/withinHours");

test("Monday, Tuesday, Wednesday", t => {
  t.test("..Out of hours", assert => {
    assert.plan(2);

    assert.notOk(
      withinHours(createDateTime(DaysOfWeek.monday, 8, 59)),
      "8.59am out of hours"
    );

    assert.notOk(
      withinHours(createDateTime(DaysOfWeek.monday, 18)),
      "6pm out of hours"
    );
  });

  t.test("..In hours", assert => {
    assert.plan(2);

    assert.ok(
      withinHours(createDateTime(DaysOfWeek.tuesday, 9)),
      "9am in hours"
    );
    assert.ok(
      withinHours(createDateTime(DaysOfWeek.tuesday, 17, 59, 59)),
      "5.59:59pm within hours"
    );
  });
});

test("Thursday, Friday", t => {
  t.test("..Out of hours", assert => {
    assert.plan(2);

    assert.notOk(
      withinHours(createDateTime(DaysOfWeek.thursday, 8, 59, 59)),
      "8:59:59am out of hours"
    );

    assert.notOk(
      withinHours(createDateTime(DaysOfWeek.thursday, 20)),
      "8pm out of hours"
    );
  });

  t.test("..In hours", assert => {
    assert.plan(2);

    assert.ok(
      withinHours(createDateTime(DaysOfWeek.friday, 9)),
      "9am in hours"
    );
    assert.ok(
      withinHours(createDateTime(DaysOfWeek.friday, 19, 59, 59)),
      "7:59:59pm within hours"
    );
  });
});

test("Saturday", t => {
  t.test("..Out of hours", assert => {
    assert.plan(2);

    assert.notOk(
      withinHours(createDateTime(DaysOfWeek.saturday, 8, 59, 59)),
      "8:59:59am out of hours"
    );

    assert.notOk(
      withinHours(createDateTime(DaysOfWeek.saturday, 12, 30)),
      "12:30pm out of hours"
    );
  });

  t.test("..In hours", assert => {
    assert.plan(2);

    assert.ok(
      withinHours(createDateTime(DaysOfWeek.saturday, 9)),
      "9am within hours"
    );
    assert.ok(
      withinHours(createDateTime(DaysOfWeek.saturday, 12, 29)),
      "12:29:59pm within hours"
    );
  });
});

test("Sunday", t => {
  t.test("..Out of hours", assert => {
    assert.plan(4);

    assert.notOk(
      withinHours(createDateTime(DaysOfWeek.sunday, 8, 59, 59)),
      "8:59:59am out of hours"
    );

    assert.notOk(
      withinHours(createDateTime(DaysOfWeek.sunday, 9)),
      "9am out of hours"
    );

    assert.notOk(
      withinHours(createDateTime(DaysOfWeek.sunday, 12, 29)),
      "12:29pm out of hours"
    );

    assert.notOk(
      withinHours(createDateTime(DaysOfWeek.sunday, 17)),
      "5pm out of hours"
    );
  });
});
