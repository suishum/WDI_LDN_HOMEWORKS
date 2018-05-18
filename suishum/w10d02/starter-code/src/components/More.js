import React from 'react';

const More = ({ loadMore }) => {
  return (
    <div className="foot-space">
      <button type="button" onClick={loadMore}>Load more</button>
    </div>
  );
};

export default More;
