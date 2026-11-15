import React from 'react';

interface BrandLogoProps {
  size?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 38 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="#123524" />
      <path
        d="M7 27L15.5 13L21.5 22L26 16L33 27H7Z"
        fill="#2E7D32"
        stroke="#FFC107"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6 30.5C9.5 28.5 13 32.5 16.5 30.5C20 28.5 23.5 32.5 27 30.5C30 28.8 32.5 31 34 30.5"
        stroke="#FFD54F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="29" cy="11" r="2.6" fill="#FFC107" />
    </svg>
  );
};

export default BrandLogo;
