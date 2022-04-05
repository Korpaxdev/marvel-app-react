import React from 'react';

import './AppSkeleton.scss';

const AppSkeleton = () => {
  return (
    <div className="skeleton">
      <h3 className="skeleton__title">
        Please select a character to see information
      </h3>
      <div className="skeleton__head">
        <div className="skeleton__circle"></div>
        <div className="skeleton__rec-small"></div>
      </div>
      <div className="skeleton__rec"></div>
      <div className="skeleton__rec"></div>
      <div className="skeleton__rec"></div>
    </div>
  );
};

export default AppSkeleton;
