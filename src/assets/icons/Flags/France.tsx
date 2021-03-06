import * as React from 'react';

function SvgFrance(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill="#fff"
      />
      <path
        d="M22 12c0-4.3-2.714-7.965-6.522-9.378v18.756C19.286 19.965 22 16.3 22 12z"
        fill="#D80027"
      />
      <path
        d="M2 12c0 4.3 2.714 7.965 6.522 9.378V2.622A10.004 10.004 0 002 12z"
        fill="#0052B4"
      />
    </svg>
  );
}

export default SvgFrance;
