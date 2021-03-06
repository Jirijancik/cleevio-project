import * as React from 'react';

function SvgSweden(props: React.SVGProps<SVGSVGElement>) {
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
        fill="#FFDA44"
      />
      <path
        d="M9.826 10.696h12.09C21.275 5.789 17.08 2 12 2c-.747 0-1.474.083-2.174.238v8.458zM7.217 10.696v-7.48a10.006 10.006 0 00-5.132 7.48h5.132zM7.217 13.304H2.085a10.006 10.006 0 005.132 7.48v-7.48zM9.826 13.304v8.458c.7.155 1.427.238 2.174.238 5.08 0 9.276-3.79 9.915-8.696H9.826z"
        fill="#0052B4"
      />
    </svg>
  );
}

export default SvgSweden;
