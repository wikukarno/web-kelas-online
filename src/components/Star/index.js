import React from "react";
import PropTypes from "prop-types";

export default function Star({ className, value, heigh, width }) {
  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className='star'
        key={`star-${index}`}
        style={{ left: index * width, height: height, width: width }}
      />,
    );
  }

  const starPlaceolder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceolder.push(
      <div
        className='star'
        key={`star-${index}`}
        style={{ left: index * width, height: height, width: width }}
      />,
    );
  }
  return <div></div>;
}
