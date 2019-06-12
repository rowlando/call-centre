const test = require("tape");

// Module under test
const CallCentre = require("../../src/callCentre");

test("CallCentre initialised with no business rules", t => {
  const callCentre = new CallCentre([]);
  const actual = callCentre.canSchedule();
  t.notOk(actual, "Cannot schedule when no there are no business rules");
  t.end();
});

test("CallCentre initialised with a single business rule", t => {
  t.test("...that pass", assert => {
    const callCentre = new CallCentre([scheduleRule => true]);
    const actual = callCentre.canSchedule("passing");

    assert.ok(actual, "Can schedule when business rule pass");
    assert.end();
  });

  t.test("...that fail", assert => {
    const callCentre = new CallCentre([scheduleRule => false]);
    const actual = callCentre.canSchedule("failing");

    assert.notOk(actual, "Cannot schedule when business rule fails");
    assert.end();
  });
});

test("CallCentre initialised with multiple business rules", t => {
  t.test("...that fail", assert => {
    const callCentre = new CallCentre([
      scheduleRule => true,
      scheduleRule => false
    ]);
    const actual = callCentre.canSchedule("failing");

    assert.notOk(
      actual,
      "Cannot schedule when at least one business rule fails"
    );
    assert.end();
  });

  t.end();
});

test("Business rule accepts requested time", t => {
  const callCentre = new CallCentre([
    scheduleRule => scheduleRule === "requested time"
  ]);

  t.test("...requested time that will pass", assert => {
    const actual = callCentre.canSchedule("requested time");

    assert.ok(actual, "business rule will pass");
    assert.end();
  });

  t.test("...argument that will fail", assert => {
    const actual = callCentre.canSchedule("invalid requested time");

    assert.notOk(actual, "business rule will fail");
    assert.end();
  });

  t.end();
});
