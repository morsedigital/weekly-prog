const React = require('react');

function checkBook(url){
  return !_.isEmpty(url) || url !== "#"
}

function checkPlaces(places){
  return _.isNumber(places) && places === 0
}

module.exports = function(props){
  if(checkPlaces(props.places)){
    return(<span className="session-full">Session full</span>);
  }

  if(checkBook(props.link)){
    return (<a className="button button-secondary" href={props.link}>Book</a>);
  }

  return (<span className="session-full">No booking required</span>);
}