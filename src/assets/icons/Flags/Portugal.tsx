import * as React from 'react';

function SvgPortugal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#F1F1F2"
      />
      <path
        d="M2 12c0 4.3 2.714 7.965 6.522 9.378L9.392 12l-.87-9.378A10.004 10.004 0 002 12z"
        fill="#6DA544"
      />
      <path
        d="M22 12c0-5.523-4.477-10-10-10a9.98 9.98 0 00-3.478.622v18.756A9.978 9.978 0 0012 22c5.523 0 10-4.477 10-10z"
        fill="#D80027"
      />
      <path
        d="M8.522 15.478a3.478 3.478 0 100-6.956 3.478 3.478 0 000 6.956z"
        fill="#FFDA44"
      />
      <path
        d="M6.565 10.26v2.175a1.957 1.957 0 103.913 0V10.26H6.565z"
        fill="#D80027"
      />
      <path
        d="M8.522 13.087a.653.653 0 01-.652-.652v-.87h1.304v.87c0 .36-.293.652-.652.652z"
        fill="#F0F0F0"
      />
    </svg>
  );
}

export default SvgPortugal;
