import React from 'react';

const PrimaryInput = (props) => {
  const { icon, placeholder, type } = props;

  return (
    <div className="mt-4 flex items-center justify-start gap-2 rounded-lg p-4 text-gray-500 outline outline-1 outline-gray-300">
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full text-ellipsis bg-opacity-0 text-xs outline-none ring-0 focus:ring-0"
      />
    </div>
  );
};

export default PrimaryInput;
