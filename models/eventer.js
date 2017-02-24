// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.js");

// Creates a "event" model that matches up with DB
var Events = sequelize.define("event", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  author: {
    type: Sequelize.STRING
  },
  eName: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  when_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});
console.log(Events);
// Syncs with DB
Events.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Events;
