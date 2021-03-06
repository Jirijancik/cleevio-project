import * as React from 'react';

function SvgGermany(props: React.SVGProps<SVGSVGElement>) {
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
        d="M2.622 15.478a10.004 10.004 0 0018.756 0L12 14.608l-9.378.87z"
        fill="#FFDA44"
      />
      <path
        d="M12 2C7.7 2 4.035 4.714 2.622 8.522l9.378.87 9.378-.87A10.004 10.004 0 0012 2z"
        fill="#000"
      />
      <path
        d="M2.622 8.522A9.978 9.978 0 002 12c0 1.223.22 2.395.622 3.478h18.756A9.98 9.98 0 0022 12c0-1.223-.22-2.395-.622-3.478H2.622z"
        fill="#D80027"
      />
    </svg>
  );
}

export default SvgGermany;
