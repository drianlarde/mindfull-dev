import React from 'react';
import { useRouter } from 'next/router';

const PrimaryButton = (props) => {
  const { textContent, className, buttonIconRight, buttonIconLeft, to } = props;
  const router = useRouter();

  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-full bg-brand-500 px-4 py-2 text-gray-50 transition-all hover:bg-brand-600 ${className}`}
      onClick={() => {
        if (to) {
          router.push(to);
        }
      }}
    >
      {buttonIconLeft}
      {textContent}
      {buttonIconRight}
    </button>
  );
};

export default PrimaryButton;
