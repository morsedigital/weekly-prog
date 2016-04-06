"use strict";

var React = require('react');

function checkBook(url) {
  return !_.isEmpty(url) || url !== "#";
}

function checkPlaces(places) {
  return _.isNumber(places) && places === 0;
}

module.exports = function (props) {
  if (checkPlaces(props.places)) {
    return React.createElement(
      "span",
      { className: "session-full" },
      "Session full"
    );
  }

  if (checkBook(props.link)) {
    return React.createElement(
      "a",
      { className: "button button-secondary", href: props.link },
      "Book"
    );
  }

  return React.createElement(
    "span",
    { className: "session-full" },
    "No booking required"
  );
};
//# sourceMappingURL=book_btn.js.map