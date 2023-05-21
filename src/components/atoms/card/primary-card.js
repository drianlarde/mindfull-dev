import React from 'react';

const PrimaryCard = (props) => {
  const { children } = props;

  return (
    <div className="rounded-2xl bg-gray-0 px-14 py-16 shadow-lg outline outline-2 outline-gray-300">
      {children}
    </div>
  );
};

export default PrimaryCard;
