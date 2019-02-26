import React from 'react';

const PrevButton = ({ onClick }) => (
  <button
    type="button"
    className="prev-button"
    onClick={() => onClick()}
  />
);

export default PrevButton;
