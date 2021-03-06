import * as React from 'react';

function SvgGreece(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 9.391h9.655a9.942 9.942 0 00-1.123-2.609H12v2.61zM5.775 19.826h12.45a10.048 10.048 0 002.307-2.609H3.468a10.053 10.053 0 002.307 2.61zM5.478 4.42a10.049 10.049 0 00-2.01 2.363h2.01V4.42z"
        fill="#338AF3"
      />
      <path
        d="M12 12V9.391H8.087V12H5.478V9.391H2.344A10.01 10.01 0 002 12c0 .903.12 1.777.344 2.609h19.311A10.01 10.01 0 0022 12H12zM12 2a9.969 9.969 0 00-3.913.795v3.988H12v-2.61h6.225A9.957 9.957 0 0012 2z"
        fill="#338AF3"
      />
    </svg>
  );
}

export default SvgGreece;
