import * as React from 'react';

function SvgCzechia(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.13 12s-6.195 7.073-6.201 7.071A9.969 9.969 0 0012 22c5.523 0 10-4.477 10-10H11.13z"
        fill="#D80027"
      />
      <path
        d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142L12 12 4.929 4.929z"
        fill="#0052B4"
      />
    </svg>
  );
}

export default SvgCzechia;
