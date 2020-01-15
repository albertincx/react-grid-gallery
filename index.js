"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/react-grid-gallery.umd.min");
} else {
  module.exports = require("./dist/react-grid-gallery.umd");
}
