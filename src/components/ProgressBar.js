import React from 'react';

const ProgressBar = ({ value }) => {
  const levels = 5;
  const max = 10;
  const filledLevels = Math.ceil((value / max) * levels);
  const emptyLevels = levels - filledLevels;

  return (
    <div className="progress-bar">
      {[...Array(filledLevels)].map((_, index) => (
        <div className="filled-level" key={index}></div>
      ))}
      {[...Array(emptyLevels)].map((_, index) => (
        <div className="empty-level" key={index}></div>
      ))}
    </div>
  );
};

export default ProgressBar;