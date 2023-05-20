import React from 'react';

const PrimaryButton = (props) => {
  const { textContent, className } = props;

  return (
    <button
      className={`bg-brand-500 px-4 py-2 rounded-full text-gray-50 hover:bg-brand-600 transition-all ${className}`}
    >
      {textContent}
    </button>
  );
};

export default PrimaryButton;
