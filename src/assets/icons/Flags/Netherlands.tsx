import * as React from 'react';

function SvgNetherlands(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 2C7.7 2 4.035 4.714 2.622 8.522h18.756A10.004 10.004 0 0012 2z"
        fill="#A2001D"
      />
      <path
        d="M12 22c4.3 0 7.965-2.714 9.378-6.522H2.622A10.003 10.003 0 0012 22z"
        fill="#0052B4"
      />
    </svg>
  );
}

export default SvgNetherlands;
