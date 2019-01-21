import React from 'react';

const NextButton = ({ onClick }) => (
  <button
    type="button"
    className="next-button"
    onClick={() => onClick()}
  />
);

export default NextButton;
