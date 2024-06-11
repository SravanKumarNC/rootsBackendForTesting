const moment = require("moment");

const getFilterCriteria = (filter) => {
  const today = moment().startOf("day");
  const lastSevenDays = moment().subtract(7, "days").startOf("day");
  const lastThirtyDays = moment().subtract(30, "days").startOf("day");

  switch (filter) {
    case "Today":
      return {
        timestamp: { $gte: today.toDate(), $lt: today.add(1, "days").toDate() },
      };
    case "Week":
      return {
        timestamp: {
          $gte: lastSevenDays.toDate(),
          $lt: today.add(1, "days").toDate(),
        },
      };
    case "Month":
      return {
        timestamp: {
          $gte: lastThirtyDays.toDate(),
          $lt: today.add(1, "days").toDate(),
        },
      };
    case "All":
    default:
      return {};
  }
};
module.exports = { getFilterCriteria };
